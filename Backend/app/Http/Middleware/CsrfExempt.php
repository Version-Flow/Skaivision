<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CsrfExempt
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Exempt the specified routes from CSRF protection
        $exemptRoutes = [
            'users/add',
            'settings/roles',
            'settings/roles/delete',
        ];

        foreach ($exemptRoutes as $route) {
            if ($request->is($route)) {
                return $next($request);
            }
        }
        return $next($request);
    }
}
