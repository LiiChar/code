<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Screen\AsSource;

class Artist extends Model
{
    use HasFactory, AsSource ;

    protected $fillable = [
        'username',
        'full_name',
        'about',
        'photo'
    ];

    public function group()
    {
        return $this->belongsTo(Group::class);
    }

    public function musics () {
        return $this->hasManyThrough(Music::class, Group::class);
    }
}
