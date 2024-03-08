<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Screen\AsSource;

class Сomposer extends Model
{
    use HasFactory, AsSource;

    protected $fillable = [
        'username',
        'full_name',
        'about',
        'photo'
    ];

    public function musics () {
        return $this->belongsToMany(Music::class);
    }
}   