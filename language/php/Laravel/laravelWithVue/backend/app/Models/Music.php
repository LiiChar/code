<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Attachment\Attachable;
use Orchid\Screen\AsSource;
use App\Models\Сomposer;

class Music extends Model
{
    use HasFactory, AsSource, Attachable;

    protected $fillable = [
        'name',
        'audition',
        'genre_id',
        'composer_id',
        'cover',
        'music'
    ];

    public function studio() {
        return $this->hasOne(Studio::class);
    }

    public function group() {
        return $this->hasOne(Group::class);
    }

    public function genre() {
        return $this->hasOne(Genre::class, 'id', 'genre_id');
    }

    public function comments() {
        return $this->hasOne(Comment::class);
    }

    public function subscriptions() {
        return $this->belongsToMany(Subscription::class, 'subscription_users', 'id', 'subscription_id');
    }

    public function composeres() {
        return $this->hasOne(Сomposer::class, 'id', 'composer_id');
    }

    public function album() {
        return $this->belongsToMany(Album::class);
    }
}