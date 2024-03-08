<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.S
     */
    public function up(): void
    {
        Schema::create('group_artists', function (Blueprint $table) {
            $table->id();
            $table->foreignId('group_id')->references('id')->on('groups');
            $table->foreignId('artist_id')->references('id')->on('artists');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('group_artists');
    }
};
