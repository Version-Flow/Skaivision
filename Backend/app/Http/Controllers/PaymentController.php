<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Unicodeveloper\Paystack\Facades\Paystack;
use Illuminate\Support\Facades\Log;

class PaymentController extends Controller
{
    
    public function subscriptionPaymentInit(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'amount' => 'required|numeric',
        ]);
    
        $data = [
            'email' => $request->email,
            'amount' => $request->amount * 100,
            // 'callback_url' => route('payment.callback'), I have not implemented yet
        ];
    
        Log::info('Preparing data for Paystack payment', $data);
    
        try {
            $response = Paystack::getAuthorizationUrl($data);
    
            Log::info('Paystack authorization URL generated:', [$response->url]);
    
            return response()->json([
                'status' => 'success',
                'authorization_url' => $response->url,
            ]);
        } catch (\Exception $e) {
            Log::error('Paystack payment initialization error:', [
                'message' => $e->getMessage(),
                'code' => $e->getCode(),
                'data' => $data
            ]);
    
            return response()->json(['status' => 'error', 'message' => 'Payment initialization failed.'], 500);
        }
    }


}
