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
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->bigIncrements('id')->startingValue(25000);
            $table->foreignId('institution_id')->constrained()->nullable()->onDelete('cascade');
            $table->foreignId('package_id')->constrained()->nullable()->onDelete('cascade');
            $table->date('next_payment');
            $table->date('current_payment')->nullable();
            $table->string('billing_id')->nullable();
            $table->string('payment_type')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subscriptions');
    }
};
