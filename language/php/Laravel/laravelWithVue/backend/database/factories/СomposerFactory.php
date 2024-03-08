<?php

namespace Database\Factories;
use App\Models\Сomposer;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class СomposerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     protected $model = Сomposer::class;

    public function definition(): array
    {
        return [
            'username' => fake()->sentence(5),
            'full_name' => fake()->firstNameFemale(),
            'about' => fake()->text(),
            'photo' => fake()->imageUrl()
        ];
    }
}
