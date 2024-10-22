<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthenticationController extends Controller
{
    public function createSessions(Request $request){
        $validated_request = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users|max:255',
            'password' => [
                'required',
                'string',
                'confirmed',
                'min:8',
                'regex:/[a-z]/',
                'regex:/[A-Z]/',
                'regex:/[0-9]/',
                'regex:/[@$!%*#?&]/',
            ],
            'image' => 'nullable|file|image|mimes:jpeg,png,jpg,gif|max:2048',
            'phone' => [
                'required',
                'string',
                'min:10',
                'max:10',
                'regex:/^[0-9]{10}$/'
            ],
            'dob' => 'nullable|date|before:today',
            'gender' => 'required|in:Male,Female,Other|max:7',
            'two_factor_pin' => 'nullable|digits:6',
            'two_factor_enabled' => 'boolean',
            'role_id' => 'required|exists:roles,id',
            'cover_image' => 'nullable|file|image|mimes:jpeg,png,jpg,gif|max:2048',
            'nickname' => 'nullable|string|max:15',
            'fear' => 'nullable|string|max:255',
            'address' => 'required|string|max:255',
            'status' => 'nullable|string|in:Active,Inactive,Suspended|max:15',
            'actions' => 'nullable|string|max:255',
        ]);        

        $validated_request['password'] = Hash::make($validated_request['password']);

        $user = User::create($validated_request);

        $token = $user->createToken($request->name);
        return [
            'user' => $user,
            'token' => $token->plainTextToken
        ];
    }

    public function getCrendential(Request $request){
        $request->validate([
            'email'=>'required|email|exists:users',
            'password'=>'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if(!$user || !Hash::check($request->password, $user->password)){
            return [
                'message' => 'The given credentials were not correct.'
            ];
        }
        $token = $user->createToken($user->name);
        return [
            'user' => $user,
            'toekn' => $token->plainTextToken
        ];
    }

    public function logout(Request $request){
        $request->user()->tokens()->delete();
        return [
            'message' => 'Your are logged out.'
        ];
    }
}
