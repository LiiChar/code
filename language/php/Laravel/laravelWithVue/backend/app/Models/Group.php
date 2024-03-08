<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Screen\AsSource;

class Group extends Model
{
    use HasFactory, AsSource;

    protected $fillable = [
        'name',
        'cover_group'
    ];

    public function artists () {
        return $this->belongsToMany(Artist::class, 'group_artists');
    }

    public function music () {
        return $this->belongsToMany(Music::class);
    }
}