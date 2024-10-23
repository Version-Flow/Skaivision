<?php

namespace App\Http\Controllers;

use App\Models\Institution;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function createNewInstitution(Request $request){
        $validated_fields = $request->validate([
            'school_name' => 'required|string|max:150',
            'school_aliase' => 'nullable|string|max:30',
            'school_type_id' => 'required|string|max:150',
            'country_id' => 'required|string|max:150',
            'region_id' => 'required|string|max:150',
            'district_id' => 'required|string|max:150',
            'town' => 'required|string|max:100',
            'gps_adress' => 'required|string|max:15', // more specific GPS format
            
            'mobile' => 'required|string|size:10|regex:/^\d{10}$/',
            'phone' => 'nullable|string|max:20|regex:/^[0-9\-\(\)\/\+\s]*$/',
            
            'email' => 'required|email|max:50|unique:institutions',
            'website_url' => 'nullable|url|max:180|unique:institutions',
            
            'logo' => 'nullable|file|image|mimes:jpeg,png,jpg,gif|max:2048',
            'school_slogan' => 'nullable|string|max:100',
            'date_started' => 'required|date|before_or_equal:today',
            'founder_name' => 'required|string|max:100',
            'school_status_id' => 'required|string|max:150',
            
            'mission_statement' => 'required|string',
            'vision_statement' => 'required|string',
            
            'principal_name' => 'required|string|max:100',
            'principal_phone_number' => 'required|string|size:10|regex:/^\d{10}$/',
            'principal_email' => 'required|email|max:50|unique:institutions',
            
            'admin_name' => 'required|string|max:100',
            'admin_phone_number' => 'required|string|size:10|regex:/^\d{10}$/',
            'admin_email' => 'required|email|max:50|unique:institutions',
            
            'accreditation_status_id' => 'required|string|max:20',
            'accreditation_body_id' => 'required|string|max:150',
            
            'legal_documents.*' => 'required|mimes:pdf,doc,docx|max:5120',
            
            'tin' => 'nullable|string|max:18',
            
            'total_students' => 'required|integer|min:1|max:99999',
            'students_age_range' => 'required|string|max:10',
            'total_teachng_staff' => 'required|string',
            'total_non_teating_staff' => 'required|integer|min:1|max:999',
            
            't&c_agreement' => 'required|boolean',
            'contract_agreement' => 'required|boolean',
            
            'package_id' => 'required|string|max:150',
            
            'status' => 'nullable|string|in:Active,Inactive,Suspended|max:15',
            'is_deleted' => 'nullable|string|in:Yes,No|max:3',
        ]);
        
        $imagePath = request('logo')->store('uploads', 'public');
        $legalDocumentsPath = request('logo')->store('uploads', 'public');
        
        // $legalDocuments = [];
        // foreach($request->file('legal_documents') as $legalDocumentFile){
        //     $legalDocuments[] = $legalDocumentFile->store('uploads', 'public');
        // }

        $redirectData = $request->except(['image', 'legal_documents']);
        $redirectData['logo'] = $imagePath;
        $redirectData['legal_documents'] = $legalDocumentsPath;

        $institution = Institution::create($redirectData);
        return response()->json([
            'message' => 'Record created successfully',
            'data' => $institution,
        ], 201);
    }
}
