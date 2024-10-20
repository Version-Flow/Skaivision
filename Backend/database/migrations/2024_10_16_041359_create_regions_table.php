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
        Schema::create('regions', function (Blueprint $table) {
            $table->bigIncrements('id')->startingValue(3200);
            $table->string('region', 150);
            $table->foreignId('country_id')->constrained()->nullable()->onDelete('cascade');
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
        Schema::dropIfExists('regions');
    }
};
