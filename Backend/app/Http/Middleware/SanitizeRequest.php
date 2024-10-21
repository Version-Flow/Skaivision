<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\RateLimiter;
use Symfony\Component\HttpFoundation\Response;

class SanitizeRequest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Apply rate-limiting first to count every request
        if ($rateLimitResponse = $this->applyRateLimiting($request)) {
            return $rateLimitResponse; // Return rate limit error if hit
        }

        $sanitized = $this->sanitizeInputs($request->all(), $violations);

        // If there are violations, log the violation and return an error response
        if (!empty($violations)) {
            // Do not increment the rate limit here
            return response()->json([
                'success' => false,
                'message' => implode(' ', $violations), // Merge all violation messages into one
            ], Response::HTTP_UNPROCESSABLE_ENTITY); // 422 status code
        }

        // Replace the request input with sanitized values
        $request->merge($sanitized);

        // Increment the rate limit for valid requests
        RateLimiter::hit($this->throttleKey($request));

        // Proceed with the request
        return $next($request);
    }



    protected function sanitizeInputs(array $inputs, &$violations = [])
    {
        foreach ($inputs as $key => $value) {
            if (is_string($value)) {
                $originalValue = $value;

                // Sanitize input
                $sanitizedValue = htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
                $sanitizedValue = trim($sanitizedValue);
                $sanitizedValue = preg_replace('/[\";$%^&*()<>?{}]/', '', $sanitizedValue); 

                // Check for violations
                if ($sanitizedValue !== $originalValue) {
                    $violations[] = ucfirst($key) . ' field contains some dangerous characters which are not accepted. Please modify the input and try again.';
                }

                // Update input with sanitized value
                $inputs[$key] = $sanitizedValue;
            }
        }

        return $inputs;
    }

    protected function applyRateLimiting(Request $request)
    {
        $key = $this->throttleKey($request);
        $maxAttempts = 10;
        $decayMinutes = 2;

        // Log::info("Checking rate limit for key: $key");

        if (RateLimiter::tooManyAttempts($key, $maxAttempts)) {
            // Log::warning("Too many attempts for key: $key");
            return response()->json([
                'success' => false,
                'message' => 'Too many requests. Please try again after 120 seconds else access to the system will be revoke'
            ], Response::HTTP_TOO_MANY_REQUESTS);
        }

        RateLimiter::hit($key, $decayMinutes * 60);
        // Log::info("Incremented attempts for key: $key. Current attempts: " . RateLimiter::attempts($key));

        return null;
    }


    protected function throttleKey(Request $request)
    {
        return $request->ip();
    }
}
