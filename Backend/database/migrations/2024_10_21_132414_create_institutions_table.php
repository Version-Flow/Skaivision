<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('institutions', function (Blueprint $table) {
            $table->bigIncrements('id')->startingValue(8180900000);
            $table->string('school_name', 150);
            $table->string('school_aliase', 30)->nullable();
            $table->string('school_type_id');
            $table->string('country_id', 100);
            $table->string('region_id', 100);
            $table->string('district_id', 100);
            $table->string('town', 100);
            $table->string('gps_adress', 15);
            $table->string('mobile', 10)->unique();
            $table->string('phone', 20)->unique();
            $table->string('email', 50)->unique();
            $table->string('website_url', 180)->unique();
            $table->string('logo')->nullable();
            $table->string('school_slogan', 100);
            $table->date('date_started');
            $table->string('founder_name', 100);
            $table->string('school_status_id');
            $table->text('mission_statement');
            $table->text('vision_statement');
            $table->string('principal_name', 100);
            $table->string('principal_phone_number', 10)->unique();
            $table->string('principal_email', 50)->unique();
            $table->string('admin_name', 100);
            $table->string('admin_phone_number', 10)->unique();
            $table->string('admin_email', 50)->unique();
            $table->string('accreditation_status_id', 20);
            $table->string ('accreditation_body_id');
            $table->string('legal_documents');
            $table->string('tin', 18);
            $table->string('total_students', 20);
            $table->string('students_age_range', 10);
            $table->string('total_teachng_staff', 15);
            $table->string('total_non_teating_staff', 15);
            $table->boolean('t&c_agreement')->default(true);
            $table->boolean('contract_agreement')->default(true);
            $table->string('package_id');
            $table->string('status', 15)->default('Active');
            $table->string('is_deleted', 3)->default('No');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('institutions');
    }
};
