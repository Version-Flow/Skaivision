<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('school_statuses', function (Blueprint $table) {
            $table->bigIncrements('id')->startingValue(1100);
            $table->string('title', 50);
            $table->string('description', 255)->nullable();
            $table->string('status', 10)->default('Active');
            $table->string('is_deleted', 3)->default('No');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('school_statuses');
    }
};
