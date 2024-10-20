<?php

namespace App\Http\Controllers;

use App\Models\Package;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class AppSettingsController extends Controller
{

    // View all packages
    public function viewPackages()
    {
        try {
            // Retrieve all roles where is_deleted is 'NO'
            $data = Package::where('is_deleted', 'NO')->orderBy('id', 'desc')->get();

            return response()->json([
                'success' => true,
                'message' => $data->isEmpty() ? 'No record found.' : 'Record retrieved successfully.',
                'data' => $data
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred: ' . $e->getMessage()
            ], 500);
        }
    }

    // Create a new package
    public function createPackage(Request $request)
    {   
        try {
            // Validate input
            $data = $request->validate([
                'title' => 'required|string|max:100',
                'price' => 'required|numeric',
                'states' => 'required|string|max:15',
                'short_info' => 'required|string|max:100',
                'payment_plan' => 'required|string|max:20',
                'description' => 'nullable|string',
            ]);
    
            // Check if a role with the same title exists and is not deleted
            if (Package::where('title', $data['title'])->where('is_deleted', 'NO')->exists()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Record already exists, please try a different one.'
                ], 422);
            }

            // Create
            Package::create($data);

            return response()->json([
                'success' => true,
                'message' => 'Operation completed successfully: The record has been added to the database, and the changes are now in effect.',
            ], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false, 'message' => 'Validation failed: ' . $e->getMessage(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false, 'message' => 'An error occurred: ' . $e->getMessage(),
            ], 500);
        }

    }

    // Update an existing package
    public function updatePackage(Request $request)
    {
              
        try {
            // Validate input
            $data = $request->validate([
                'id' => 'required|exists:packages,id',
                'title' => 'required|string|max:100',
                'price' => 'required|numeric',
                'states' => 'required|string|max:15',
                'short_info' => 'required|string|max:100',
                'payment_plan' => 'required|string|max:20',
                'description' => 'nullable|string',
            ]);

            // find record by id
            $idata = Package::find($data['id']);

            if ($idata) {
                $idata->update($data);
                return response()->json([
                    'success' => true,
                    'message' => 'Operation completed successfully: The record has been updated, and the changes are now reflected.',
                ], 200);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Operation failed: Record update unsuccessful, please try again.',
                ], 404);
            }

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed: ' . $e->getMessage(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred: ' . $e->getMessage(),
            ], 500);
        }
        
    }

    // Delete a package (soft delete)
    public function deletePackage(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'id' => 'required|exists:packages,id',
            ]);

            // find record by id
            $idata = Package::find($data['id']);

            if ($idata) {
                // Update the 'is_deleted' status to 'Yes'
                $idata->update(['is_deleted' => 'Yes']);

                return response()->json([
                    'success' => true,
                    'message' => 'Operation completed successfully: The record has been deleted, and it will no longer be in the system.',
                ], 200);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Operation failed: Record deletion unsuccessful, please try again.',
                ], 404);
            }

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed: ' . $e->getMessage(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred: ' . $e->getMessage(),
            ], 500);
        }

        
    }
}
