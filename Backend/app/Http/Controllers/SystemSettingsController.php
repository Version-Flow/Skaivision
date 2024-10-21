<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\Level;
use App\Models\Region;
use App\Models\Country;
use App\Models\District;
use App\Models\Religion;
use App\Models\Ethnicity;
use App\Models\Permission;
use App\Models\SchoolType;
use App\Models\Relationship;
use App\Models\SchoolStatus;
use Illuminate\Http\Request;
use App\Models\AccreditationBody;
use Illuminate\Validation\ValidationException;

class SystemSettingsController extends Controller
{
    //Roles *********************************************************************************
    public function viewRole()
    {
        try {
            // Retrieve all roles where is_deleted is 'NO'
            $data = Role::where('is_deleted', 'NO')->orderBy('id', 'desc')->get();

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

    public function createRole(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'title' => 'required|string|max:50',
                'description' => 'required|string|max:1000',
            ]);

            // Check if a role with the same title exists and is not deleted
            if (Role::where('title', $data['title'])->where('is_deleted', 'NO')->exists()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Record already exists, please try a different one.'
                ], 422);
            }

            // Create role
            Role::create($data);

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

    public function updateRole(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'role_id' => 'required|exists:roles,id',
                'title' => 'required|string|max:50',
                'description' => 'required|string|max:1000',
            ]);

            // find record by id
            $idata = Role::find($data['role_id']);

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

    public function deleteRole(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'role_id' => 'required|exists:roles,id',
            ]);

            // find record by id
            $idata = Role::find($data['role_id']);

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
    // ======================================================================================

   

    public function viewCountry()
    {
        try {

            $data = Country::where('is_deleted', 'NO')->orderBy('id', 'desc')->get();
    
            return response()->json([
                'success' => true,
                'message' => $data->isEmpty() ? 'No record found.' : 'Countries retrieved successfully.',
                'data' => $data
            ], 200);
    
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred: ' . $e->getMessage()
            ], 500);
        }
    }
    
    public function createCountry(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'country' => 'required|string|max:100',
                'country_code' => 'required|string|max:10',
                'initials' => 'required|string|max:5',
            ]);

            // Check if a country with the same name exists and is not deleted
            if (Country::where('country', $data['country'])->where('is_deleted', 'NO')->exists()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Record already exists, please try a different one.'
                ], 422);
            }

            // Create country
            Country::create($data);

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
    public function updateCountry(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'country_id' => 'required|exists:countries,id',
                'country' => 'required|string|max:100',
                'country_code' => 'required|string|max:10',
                'initials' => 'required|string|max:5',
            ]);

            // Find the country by country_id
            $idata = Country::find($data['country_id']);

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
    public function deleteCountry(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'country_id' => 'required|exists:countries,id',
            ]);

            // Find the country by country_id
            $idata = Country::find($data['country_id']);

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
    // ========================================================================================

    

    public function viewRegion()
    {
        try {
            // Retrieve all regions where is_deleted is 'NO', and include country relationship
            $data = Region::where('is_deleted', 'NO')
                ->with('country')
                ->orderBy('id', 'desc')
                ->get();
    
            return response()->json([
                'success' => true,
                'message' => $data->isEmpty() ? 'No record found.' : 'Regions retrieved successfully.',
                'data' => $data
            ], 200);
    
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred: ' . $e->getMessage()
            ], 500);
        }
    }

    public function getRegionByCountry(Request $request)
    {
        try {
            // Validate that the country_id is provided and exists in the countries table
            $data = $request->validate([
                'country_id' => 'required|exists:countries,id'
            ]);

            // Fetch all regions where the country_id matches and is_deleted is 'NO'
            $regions = Region::where('country_id', $data['country_id'])
                            ->where('is_deleted', 'NO')
                            ->orderBy('id', 'desc')
                            ->get();

            return response()->json([
                'success' => true,
                'message' => $regions->isEmpty() ? 'No regions found for the selected country.' : 'Regions retrieved successfully.',
                'data' => $regions
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred: ' . $e->getMessage()
            ], 500);
        }
    }


    public function createRegion(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'region' => 'required|string|max:100',
                'country_id' => 'required|exists:countries,id',
            ]);

            // Check if a region with the same name exists and is not deleted
            if (Region::where('region', $data['region'])->where('is_deleted', 'NO')->exists()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Record already exists, please try a different one.'
                ], 422);
            }

            // Create region
            Region::create($data);

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

    public function updateRegion(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'region_id' => 'required|exists:regions,id',
                'region' => 'required|string|max:100',
                'country_id' => 'required|exists:countries,id',
            ]);

            // Find the region by region_id
            $idata = Region::find($data['region_id']);

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

    public function deleteRegion(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'region_id' => 'required|exists:regions,id',
            ]);

            // Find the region by region_id
            $idata = Region::find($data['region_id']);

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


    // Districts   ***************************************************************************
    public function viewDistrict()
    {
        try {
            // Retrieve all districts where is_deleted is 'NO', and include region relationship
            $data = District::where('is_deleted', 'NO')
                ->with('region')
                ->orderBy('id', 'desc')
                ->get();
    
            return response()->json([
                'success' => true,
                'message' => $data->isEmpty() ? 'No record found.' : 'Districts retrieved successfully.',
                'data' => $data
            ], 200);
    
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred: ' . $e->getMessage()
            ], 500);
        }
    }

    public function getDistrictByRegion(Request $request)
    {
        try {
            // Validate that the region_id is provided and exists in the regions table
            $data = $request->validate([
                'region_id' => 'required|exists:regions,id'
            ]);

            // Fetch all districts where the region_id matches and is_deleted is 'NO'
            $districts = District::where('region_id', $data['region_id'])
                                ->where('is_deleted', 'NO')
                                ->orderBy('id', 'desc')
                                ->get();

            return response()->json([
                'success' => true,
                'message' => $districts->isEmpty() ? 'No districts found for the selected region.' : 'Districts retrieved successfully.',
                'data' => $districts
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred: ' . $e->getMessage()
            ], 500);
        }
    }


    public function createDistrict(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'district' => 'required|string|max:100',
                'region_id' => 'required|exists:regions,id',
            ]);

            // Check if a district with the same name exists and is not deleted
            if (District::where('district', $data['district'])->where('is_deleted', 'NO')->exists()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Record already exists, please try a different one.'
                ], 422);
            }

            // Create district
            District::create($data);

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

    public function updateDistrict(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'district_id' => 'required|exists:districts,id',
                'district' => 'required|string|max:100',
                'region_id' => 'required|exists:regions,id',
            ]);

            // Find the district by district_id
            $idata = District::find($data['district_id']);

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

    public function deleteDistrict(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'district_id' => 'required|exists:districts,id',
            ]);

            // Find the district by district_id
            $idata = District::find($data['district_id']);

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



    // Permissions     ***************************************************************************
    public function viewPermission()
    {
        // Logic to view permissions
    }

    public function createPermission(Request $request)
    {
        // Logic to create a permission
    }

    public function updatePermission(Request $request)
    {
        // Logic to update a permission
    }

    public function deletePermission(Request $request)
    {
        // Logic to delete a permission
    }

    public function getPermission()
    {
        // Logic to get permissions
    }


    // Ethnicity   ***************************************************************************
    public function viewEthnicity()
    {
        try {
            $data = Ethnicity::where('is_deleted', 'NO')->with('region')->orderBy('id', 'desc')->get();
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

    // Get ethnicities by region
    public function getEthnicityByRegion(Request $request)
    {
        try {
            $data = $request->validate([
                'region_id' => 'required|exists:regions,id'
            ]);

            // Fetch all ethnicities where the region_id matches and is_deleted is 'NO'
            $idata = Ethnicity::where('region_id', $data['region_id'])->where('is_deleted', 'NO')->orderBy('id', 'desc')->get();

            return response()->json([
                'success' => true,
                'message' => $idata->isEmpty() ? 'No record found for the selected region.' : 'Record retrieved successfully.',
                'data' => $idata
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred: ' . $e->getMessage()
            ], 500);
        }
    }

    // Create a new ethnicity
    public function createEthnicity(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'ethnicity' => 'required|string|max:50',
                'region_id' => 'required|exists:regions,id',
                'description' => 'nullable|string|max:500',
            ]);

            // Check if an ethnicity with the same name exists and is not deleted
            if (Ethnicity::where('ethnicity', $data['ethnicity'])->where('is_deleted', 'NO')->exists()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Record already exists, please try a different one.'
                ], 422);
            }

            // Create ethnicity
            Ethnicity::create($data);

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

    // Update an existing ethnicity
    public function updateEthnicity(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'ethnicity_id' => 'required|exists:ethnicities,id',
                'ethnicity' => 'required|string|max:50',
                'region_id' => 'required|exists:regions,id',
                'description' => 'nullable|string|max:500',
            ]);

            // Find the ethnicity by id
            $idata = Ethnicity::find($data['ethnicity_id']);

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

    // Soft delete ethnicity
    public function deleteEthnicity(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'ethnicity_id' => 'required|exists:ethnicities,id',
            ]);

            // Find the ethnicity by id
            $idata = Ethnicity::find($data['ethnicity_id']);

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


    // Levels   ***************************************************************************
    public function viewLevel()
    {
        try {
            $data = Level::where('is_deleted', 'NO')->orderBy('id', 'desc')->get();
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

    public function createLevel(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'title' => 'required|string|max:50',
                'description' => 'required|string|max:1000',
            ]);

            // Check if a role with the same title exists and is not deleted
            if (Level::where('title', $data['title'])->where('is_deleted', 'NO')->exists()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Record already exists, please try a different one.'
                ], 422);
            }

            // Create role
            Level::create($data);

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

    public function updateLevel(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'level_id' => 'required|exists:levels,id',
                'title' => 'required|string|max:50',
                'description' => 'required|string|max:1000',
            ]);

            // find record by id
            $idata = Level::find($data['level_id']);

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

    public function deleteLevel(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'level_id' => 'required|exists:levels,id',
            ]);

            // find record by id
            $idata = Level::find($data['level_id']);

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

    // Relationships   ***************************************************************************
    public function viewRelationship()
    {
        try {
            $data = Relationship::where('is_deleted', 'NO')->orderBy('id', 'desc')->get();
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

    public function createRelationship(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'title' => 'required|string|max:50',
                'description' => 'required|string|max:1000',
            ]);

            // Check if a role with the same title exists and is not deleted
            if (Relationship::where('title', $data['title'])->where('is_deleted', 'NO')->exists()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Record already exists, please try a different one.'
                ], 422);
            }

            // Create role
            Relationship::create($data);

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

    public function updateRelationship(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'relationship_id' => 'required|exists:relationships,id',
                'title' => 'required|string|max:50',
                'description' => 'required|string|max:1000',
            ]);

            // find record by id
            $idata = Relationship::find($data['relationship_id']);

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

    public function deleteRelationship(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'relationship_id' => 'required|exists:relationships,id',
            ]);

            // find record by id
            $idata = Relationship::find($data['relationship_id']);

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

    // School Status   ***************************************************************************
    public function viewSchoolStatus()
    {
        try {
            $data = SchoolStatus::where('is_deleted', 'NO')->orderBy('id', 'desc')->get();
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

    public function createSchoolStatus(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'title' => 'required|string|max:50',
                'description' => 'required|string|max:1000',
            ]);

            // Check if a role with the same title exists and is not deleted
            if (SchoolStatus::where('title', $data['title'])->where('is_deleted', 'NO')->exists()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Record already exists, please try a different one.'
                ], 422);
            }

            // Create role
            SchoolStatus::create($data);

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

    public function updateSchoolStatus(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'school_status_id' => 'required|exists:school_statuses,id',
                'title' => 'required|string|max:50',
                'description' => 'required|string|max:1000',
            ]);

            // find record by id
            $idata = SchoolStatus::find($data['school_status_id']);

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

    public function deleteSchoolStatus(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'school_status_id' => 'required|exists:school_statuses,id',
            ]);

            // find record by id
            $idata = SchoolStatus::find($data['school_status_id']);

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

    // School Type   ***************************************************************************
    public function viewSchoolType()
    {
        try {
            $data = SchoolType::where('is_deleted', 'NO')->orderBy('id', 'desc')->get();
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

    public function createSchoolType(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'title' => 'required|string|max:50',
                'description' => 'required|string|max:1000',
            ]);

            // Check if a role with the same title exists and is not deleted
            if (SchoolType::where('title', $data['title'])->where('is_deleted', 'NO')->exists()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Record already exists, please try a different one.'
                ], 422);
            }

            // Create role
            SchoolType::create($data);

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

    public function updateSchoolType(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'school_type_id' => 'required|exists:school_types,id',
                'title' => 'required|string|max:50',
                'description' => 'required|string|max:1000',
            ]);

            // find record by id
            $idata = SchoolType::find($data['school_type_id']);

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

    public function deleteSchoolType(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'school_type_id' => 'required|exists:school_types,id',
            ]);

            // find record by id
            $idata = SchoolType::find($data['school_type_id']);

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

    // Religion   ***************************************************************************
    public function viewReligion()
    {
        try {
            $data = Religion::where('is_deleted', 'NO')->orderBy('id', 'desc')->get();
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

    public function createReligion(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'religion' => 'required|string|max:50',
                'description' => 'required|string|max:1000',
            ]);

            // Check if a role with the same title exists and is not deleted
            if (Religion::where('religion', $data['religion'])->where('is_deleted', 'NO')->exists()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Record already exists, please try a different one.'
                ], 422);
            }

            // Create role
            Religion::create($data);

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

    public function updateReligion(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'religion_id' => 'required|exists:religions,id',
                'religion' => 'required|string|max:50',
                'description' => 'required|string|max:1000',
            ]);

            // find record by id
            $idata = Religion::find($data['religion_id']);

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

    public function deleteReligion(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'religion_id' => 'required|exists:religions,id',
            ]);

            // find record by id
            $idata = Religion::find($data['religion_id']);

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

    // Accreditation Body   ***************************************************************************
    public function viewAccreditationBody()
    {
        try {
            $data = AccreditationBody::where('is_deleted', 'NO')->orderBy('id', 'desc')->get();
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

    public function createAccreditationBody(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'name' => 'required|string|max:50',
                'description' => 'required|string|max:1000',
            ]);

            if (AccreditationBody::where('name', $data['name'])->where('is_deleted', 'NO')->exists()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Record already exists, please try a different one.'
                ], 422);
            }

            // Create
            AccreditationBody::create($data);

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

    public function updateAccreditationBody(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'accreditation_id' => 'required|exists:accreditation_bodies,id',
                'name' => 'required|string|max:50',
                'description' => 'required|string|max:1000',
            ]);

            // find record by id
            $idata = AccreditationBody::find($data['accreditation_id']);

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

    public function deleteAccreditationBody(Request $request)
    {
        try {
            // Validate input
            $data = $request->validate([
                'accreditation_id' => 'required|exists:accreditation_bodies,id',
            ]);

            $idata = AccreditationBody::find($data['accreditation_id']);

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
