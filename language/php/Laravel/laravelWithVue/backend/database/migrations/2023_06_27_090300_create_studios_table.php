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
        Schema::create('studios', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('icon');
            $table->text('description');
            $table->foreignId('group_id')->references('id')->on('groups');
            $table->foreignId('music_id')->references('id')->on('music');
            $table->foreignId('artist_id')->references('id')->on('artists');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('studios');
    }
};
