<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function createNewAccount(Request $request){
        $validated_fields = $request->validate([
            'school_name' => 'required|string|max:255',
            'school_aliase' => 'required|string|max:255',
            'school_type_id' => 'required|exists:school_type,id',
            'country_id' => 'required|exists:country,id',
            'region_id' => 'required|exists:region,id',
            'district_id' => 'required|exists:district,id',
            'town' => 'required|string|max:255',
            'gps_address' => 'required|string|max:255',
            
            'mobile' => 'string|max:10|regex:/^[0-9\-\(\)\/\+\s]*$/',
            'phone' => 'required|string|max:10|regex:/^[0-9\-\(\)\/\+\s]*$/',
            
            'email' => 'required|email|max:255',
            'website_url' => 'url|max:255',
        
            'school_logo' => 'required|file|mimes:jpeg,png,jpg,gif|max:2048',
            'school_slogan' => 'string|max:255',
            'date_started' => 'required|date',
            'founder' => 'string|max:255',
            'school_status_id' => 'required|exists:school_status,id',
            
            'mission_statement' => 'required',
            'vision_statement' => 'required',
            
            'principal_name' => 'required|string|max:255',
            'principal_phone' => 'required|string|max:10|regex:/^[0-9\-\(\)\/\+\s]*$/',
            'admin_name' => 'required|string|max:255',
            'admin_phone' => 'required|string|max:10|regex:/^[0-9\-\(\)\/\+\s]*$/',
            'admin_email' => 'required|email|max:255',
            
            'accreditation_status' => 'required|string|max:255',
            'accreditation_body_id' => 'required|exists:accreditation_body,id',

            'legal_documents' => 'required|array|min:3|max:3', // Exactly 3 documents are uploaded
            'legal_documents.*' => 'file|mimes:pdf,doc,docx|max:5120', // Each document must be a valid file
            
            'tin' => 'string|max:50',
            
            'total_student' => 'required|integer|min:1',
            'student_age_range' => 'required|string|max:50',
            'total_teaching_staff' => 'required|integer|min:1',
            'total_non_teaching_staff' => 'required|integer|min:1',

            't&c_agreement' => 'required|boolean',
            'contract_agreement' => 'required|boolean',
            
            'package_id' => 'required|exists:package,id',

            'status' => 'string|max:15',
            'is_deleted' => 'string|max:3',
        ]);

        $institution = User::create($validated_fields);
        return response()->json([
            'message' => 'Record created successfully',
            'data' => $institution,
        ], 201);
    }
}
