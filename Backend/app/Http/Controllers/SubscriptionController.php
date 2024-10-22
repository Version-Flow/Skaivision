<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function createSubscription(Request $request){
        $validated_fields = $request->validate([
            'institution_id' => 'required|exists:institution,id',
            'package_id' => 'required|exists:package,id',
            'next_payment' => 'required|string|max:255',
            'current_payment' => 'required|string|max:255',
            'billing_type' => 'required|string|max:255',
            'payment_type' => 'required|string|max:255',
        ]);

        $subscription = User::create($validated_fields);
        return response()->json([
            'message' => 'Record created successfully',
            'data' => $subscription,
        ], 201);
    }
}
