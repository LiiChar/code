<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'audition',
        'cover_album'
    ];

    public function music () {
        return $this->belongsToMany(Music::class);
    }
}