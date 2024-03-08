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
        Schema::create('composer_music', function (Blueprint $table) {
            $table->id();
            $table->foreignId('composer_id')->references('id')->on('сomposers');
            $table->foreignId('music_id')->references('id')->on('music');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('composer_music');
    }
};
