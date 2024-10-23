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
        Schema::create('payments', function (Blueprint $table) {
            $table->bigIncrements('id')->startingValue(25000);
             $table->foreignId('institution_id')->constrained()->nullable()->onDelete('cascade');
             $table->foreignId('subscription_id')->constrained()->nullable()->onDelete('cascade');
            $table->decimal('total_amount', 7, 2);
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
        Schema::dropIfExists('payments');
    }
};
