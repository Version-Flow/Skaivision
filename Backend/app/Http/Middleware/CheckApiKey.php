<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class CheckApiKey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $apiKey = $request->header('ApiKey');
        $userKey = $request->header('UserKey');

        $decoded = base64_decode($apiKey);
        $iv = substr($decoded, 0, 8);
        $encryptedToken = substr($decoded, 8);
        $decryptedToken = openssl_decrypt($encryptedToken, 'des-cbc', $userKey, 0, $iv);

        if (!$apiKey || !$userKey) {
            return response()->json(['message' => 'Missing API key or user key'], 403);
        }

        $isValid = DB::table('user_api_tokens')->where('raw_token', $decryptedToken)->exists();

        if (!$isValid) {
            return response()->json(['message' => 'Invalid API key or user key'], 403);
        }

        return $next($request);
    }
}
