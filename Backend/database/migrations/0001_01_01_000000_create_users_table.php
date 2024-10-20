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
       Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id')->startingValue(56000);
            $table->foreignId('role_id')->constrained()->nullable()->onDelete('cascade');
            $table->string('name', 100);
            $table->string('nickname', 15) ->nullable();
            $table->string('fear', 255) ->nullable();
            $table->string('address', 255) ->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->date('dob')->nullable();
            $table->string('gender', 7)->nullable();
            $table->string('phone', 10);
            $table->string('password');
            $table->rememberToken();
            $table->boolean('two_factor_enabled')->default(false);
            $table->string('two_factor_pin', 6)->nullable();
            $table->string('image', 100)->nullable();
            $table->string('cover_image', 100)->nullable();
            $table->boolean('verified')->default(false);
            $table->string('token', 255)->nullable();
            $table->string('status', 15)->default('Active');
            $table->string('actions', 15)->default('[*]');
            $table->string('is_deleted', 3)->default('No');
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->date('date');
            $table->string('time_in', 13)->nullable();
            $table->string('time_out', 13)->nullable();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });

        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
