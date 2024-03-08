<?php

namespace Database\Factories;

use App\Models\Music;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Music>
 */
class MusicFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     protected $model = Music::class;

     private function random_pic()
     {
         $files = glob('C:/Xoy/Kod/Laravel/laravelWithVue/back/public/stuff/music/*.*');
         $file = array_rand($files);
         return explode('/', $files[$file])[array_key_last(explode('/', $files[$file]))];
     }

    public function definition(): array
    {
        return [
            'name' => fake()->sentence(3),
            'genre_id' => rand(1, 5),
            'composer_id' => rand(1, 5),
            'cover' => fake()->imageUrl($width=400, $height=400),
            'music' => $this->random_pic()
        ];
    }


}
