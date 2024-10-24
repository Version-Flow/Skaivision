<?php

use Illuminate\Http\Request;
use App\Http\Middleware\CheckApiKey;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\SanitizeRequest;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\UniversalController;
use App\Http\Controllers\AppSettingsController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\SystemSettingsController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::prefix('v2')->group(function () {

    // Free and Open Routes   ===================================================================================

    // Authentication
    Route::post('/authentication/sessions', [AuthenticationController::class, 'createSessions']);
    Route::get('/authentication/login', [AuthenticationController::class, 'getCrendential']);
    Route::post('/authentication/logout', [AuthenticationController::class, 'logout']);

    // Route::post('/settings/roles', [SystemSettingsController::class, 'createRole'])->middleware([SanitizeRequest::class]);
    // End of free routes    =====================================================================================


    // Route::middleware([CheckApiKey::class, 'auth:sanctum'])->group(function () {   
    
        // Bulk Remove records
        Route::post('/universal/bulk-remove', [UniversalController::class, 'bulkRemove']);

        // Roles Route
        Route::post('/settings/roles/update', [SystemSettingsController::class, 'updateRole']);
        Route::post('/settings/roles/delete', [SystemSettingsController::class, 'deleteRole']);
        Route::get('/settings/roles', [SystemSettingsController::class, 'viewRole']);
        Route::post('/settings/roles', [SystemSettingsController::class, 'createRole']);

        // Countries:
        Route::get('/settings/countries', [SystemSettingsController::class, 'viewCountry']);
        Route::post('/settings/countries', [SystemSettingsController::class, 'createCountry']);
        Route::post('/settings/countries/update', [SystemSettingsController::class, 'updateCountry']);
        Route::post('/settings/countries/delete', [SystemSettingsController::class, 'deleteCountry']);

        // Regions:
        Route::get('/settings/regions', [SystemSettingsController::class, 'viewRegion']);
        Route::post('/settings/regions', [SystemSettingsController::class, 'createRegion']);
        Route::post('/settings/regions/update', [SystemSettingsController::class, 'updateRegion']);
        Route::post('/settings/regions/delete', [SystemSettingsController::class, 'deleteRegion']);
        Route::get('/settings/regions/by-country', [SystemSettingsController::class, 'getRegionByCountry']);

        // Districts:
        Route::get('/settings/districts', [SystemSettingsController::class, 'viewDistrict']);
        Route::post('/settings/districts', [SystemSettingsController::class, 'createDistrict']);
        Route::post('/settings/districts/update', [SystemSettingsController::class, 'updateDistrict']);
        Route::post('/settings/districts/delete', [SystemSettingsController::class, 'deleteDistrict']);
        Route::get('/settings/districts/by-region', [SystemSettingsController::class, 'getDistrictByRegion']);

        // Permissions:
        Route::get('/settings/permissions', [SystemSettingsController::class, 'viewPermission']);
        Route::post('/settings/permissions', [SystemSettingsController::class, 'createPermission']);
        Route::post('/settings/permissions/update', [SystemSettingsController::class, 'updatePermission']);
        Route::post('/settings/permissions/delete', [SystemSettingsController::class, 'deletePermission']);
        Route::get('/settings/permissions/get', [SystemSettingsController::class, 'getPermission']);

        // Ethnicity Routes
        Route::get('/settings/ethnicities', [SystemSettingsController::class, 'viewEthnicity']);
        Route::post('/settings/ethnicities', [SystemSettingsController::class, 'createEthnicity']);
        Route::post('/settings/ethnicities/update', [SystemSettingsController::class, 'updateEthnicity']);
        Route::post('/settings/ethnicities/delete', [SystemSettingsController::class, 'deleteEthnicity']);
        Route::get('/settings/ethnicities/by-region', [SystemSettingsController::class, 'getEthnicityByRegion']);

        // Level Routes
        Route::get('/settings/levels', [SystemSettingsController::class, 'viewLevel']);
        Route::post('/settings/levels', [SystemSettingsController::class, 'createLevel']);
        Route::post('/settings/levels/update', [SystemSettingsController::class, 'updateLevel']);
        Route::post('/settings/levels/delete', [SystemSettingsController::class, 'deleteLevel']);

        // Relationship Routes
        Route::get('/settings/relationships', [SystemSettingsController::class, 'viewRelationship']);
        Route::post('/settings/relationships', [SystemSettingsController::class, 'createRelationship']);
        Route::post('/settings/relationships/update', [SystemSettingsController::class, 'updateRelationship']);
        Route::post('/settings/relationships/delete', [SystemSettingsController::class, 'deleteRelationship']);

        // School Status Routes
        Route::get('/settings/school-statuses', [SystemSettingsController::class, 'viewSchoolStatus']);
        Route::post('/settings/school-statuses', [SystemSettingsController::class, 'createSchoolStatus']);
        Route::post('/settings/school-statuses/update', [SystemSettingsController::class, 'updateSchoolStatus']);
        Route::post('/settings/school-statuses/delete', [SystemSettingsController::class, 'deleteSchoolStatus']);

        // School Type Routes
        Route::get('/settings/school-types', [SystemSettingsController::class, 'viewSchoolType']);
        Route::post('/settings/school-types', [SystemSettingsController::class, 'createSchoolType']);
        Route::post('/settings/school-types/update', [SystemSettingsController::class, 'updateSchoolType']);
        Route::post('/settings/school-types/delete', [SystemSettingsController::class, 'deleteSchoolType']);

        // Religion Routes
        Route::get('/settings/religions', [SystemSettingsController::class, 'viewReligion']);
        Route::post('/settings/religions', [SystemSettingsController::class, 'createReligion']);
        Route::post('/settings/religions/update', [SystemSettingsController::class, 'updateReligion']);
        Route::post('/settings/religions/delete', [SystemSettingsController::class, 'deleteReligion']);

        // Accreditation Body Routes
        Route::get('/settings/accreditation-bodies', [SystemSettingsController::class, 'viewAccreditationBody']);
        Route::post('/settings/accreditation-bodies', [SystemSettingsController::class, 'createAccreditationBody']);
        Route::post('/settings/accreditation-bodies/update', [SystemSettingsController::class, 'updateAccreditationBody']);
        Route::post('/settings/accreditation-bodies/delete', [SystemSettingsController::class, 'deleteAccreditationBody']);


        // Packages settings
        Route::get('/settings/packages', [AppSettingsController::class, 'viewPackages']);
        Route::post('/settings/packages', [AppSettingsController::class, 'createPackage']);
        Route::post('/settings/packages/update', [AppSettingsController::class, 'updatePackage']);
        Route::post('/settings/packages/delete', [AppSettingsController::class, 'deletePackage']);


        //Institution Routes
        Route::get('/settings/setup/institiution', [AccountController::class, 'viewInstitution']);
        Route::post('/settings/setup/institiution/create-account', [AccountController::class, 'createNewInstitution']);
        Route::put('/settings/setup/institiution/{id}/set-account', [AccountController::class, 'setNewInstitution']);
        Route::post('/settings/setup/institiution/{id}/mute-account', [AccountController::class, 'muteInstsitution']);
        Route::post('/settings/setup/institiution/{id}/freeze-account', [AccountController::class, 'freezeInstitution']);


        //Subscription Routes
        Route::get('/payment/account/subscription', [SubscriptionController::class, 'viewSubscription']);
        Route::post('/payment/account/subscription/create', [SubscriptionController::class, 'subscriptionPayment']);
        Route::post('/payment/account/subscription/update', [SubscriptionController::class, 'updateSubscription']);
        Route::post('/payment/account/subscription/delete', [SubscriptionController::class, 'renewalPayment']);


        //Billing Routes
        Route::get('/settings/setup/billing', [BillingController::class, 'viewBilling']);
        Route::post('/settings/setup/billing/create', [BillingController::class, 'createBilling']);
        Route::post('/settings/setup/billing/update', [BillingController::class, 'updateBilling']);
        Route::post('/settings/setup/billing/delete', [BillingController::class, 'deleteBilling']);


        //Payment Routes
        Route::post('/payment/account/billing', [PaymentController::class, 'viewPayment']);
        Route::get('/payment/account/subscription-payment', [PaymentController::class, 'sunscriptionPayment']);
        Route::post('/payment/account/subscription-checkout', [PaymentController::class, 'subscriptionCheckout']);
        Route::post('/payment/account/renewal-payment', [PaymentController::class, 'renewalPayment']);
        Route::post('/payment/account/renewal-checkout', [PaymentController::class, 'renewalCheckout']);



        Route::post('/payment/account/subscription-init', [PaymentController::class, 'subscriptionPaymentInit']);
        Route::post('/payment/account/subscription', [PaymentController::class, 'subscriptionPayment']);
        Route::post('/payment/account/subscription-checkout', [PaymentController::class, 'subscriptionCheckout']);
        Route::post('/payment/account/renewal-init', [PaymentController::class, 'renewalPaymentInit']);
        Route::post('/payment/account/renewal', [PaymentController::class, 'renewalPayment']);
        Route::post('/payment/account/renewal-checkout', [PaymentController::class, 'renewalCheckout']);

        // Routes for when Paystack redirects after a successful/failed payment
        Route::get('/payment/callback', [PaymentController::class, 'subscriptionPayment']);
        Route::get('/payment/renewal-callback', [PaymentController::class, 'renewalPayment']);

   /*  }); */


});
