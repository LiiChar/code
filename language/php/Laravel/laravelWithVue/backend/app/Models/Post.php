<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'text',
        'user_id',
        'image',
        'num_reader'
    ];

    public function author () {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}


