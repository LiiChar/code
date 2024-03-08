<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     protected $model = Post::class;

    public function definition(): array
    {
        return [
            'name' => fake()->sentence(3),
            'text' => fake()->text(),
            'user_id' => rand(1, 10),
            'image' => fake()->imageUrl($width=400, $height=400),
        ];
    }
}
