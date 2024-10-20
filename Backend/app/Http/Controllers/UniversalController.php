<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Validation\ValidationException;

class UniversalController extends Controller
{
    //

    // Bullk Remove records
    public function bulkRemove(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'ids' => 'required|array',
                'ids.*' => 'numeric',
                'table' => 'required|string',
            ]);

            // Initialize a count for successful updates
            $updatedCount = 0;

            // Check if the table exists
            if (!Schema::hasTable($data['table'])) {
                return response()->json([
                    'success' => false,
                    'message' => 'Operation failed: Table does not exist.',
                ], 404);
            }

            // Loop through the IDs and update the records in the specified table
            foreach ($data['ids'] as $id) {
                $record = DB::table($data['table'])->find($id);

                if ($record) {
                    // Update the 'is_deleted' status to 'Yes'
                    DB::table($data['table'])->where('id', $id)->update(['is_deleted' => 'Yes']);
                    $updatedCount++;
                }
            }

            if ($updatedCount > 0) {
                return response()->json([
                    'success' => true,
                    'message' => "Operation completed successfully: $updatedCount records been deleted, and it will no longer be in the system.",
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
