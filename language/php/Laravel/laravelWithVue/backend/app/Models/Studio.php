<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Studio extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'icon',
        'description',
        'group_id'
    ];

    public function groups () {
        return $this->hasMany(Group::class);
    }

    public function artists () {
        return $this->hasManyThrough(Artist::class, Group::class);
    }

    public function musics () {
        return $this->hasManyThrough(Music::class, Group::class);
    }
}