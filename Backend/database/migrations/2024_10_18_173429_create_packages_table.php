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
        Schema::create('packages', function (Blueprint $table) {
            $table->bigIncrements('id')->startingValue(9100);
            $table->string('title', 100);
            $table->decimal('price', 18,2);
            $table->string('states', 15)->nullable();
            $table->string('short_info', 50);
            $table->string('payment_plan', 20)->nullable();
            $table->text('description')->nullable();
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
        Schema::dropIfExists('packages');
    }
};
