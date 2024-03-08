<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Genre;
use App\Models\Music;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;
use App\Models\Сomposer;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->count(10)->create();
        Genre::factory()->count(5)->create();
        Сomposer::factory()->count(6)->create();
        Music::factory()->count(7)->create();
        Post::factory()->count(7)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
