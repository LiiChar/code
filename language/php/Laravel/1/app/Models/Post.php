<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $table = 'posts';
    protected $guarded = false;

    public function author () {
        return $this -> hasOne(User::class, 'id', 'users_id');
    }

    public function category () {
        return $this -> hasOne(Category::class, 'id', 'category_id');
    }

    public function tags () {
        return $this -> belongsToMany(Tag::class, 'post_tags');
    }

    public function comments () {
        return $this -> hasMany(Comment::class, 'post_id', 'id');
    }
}
