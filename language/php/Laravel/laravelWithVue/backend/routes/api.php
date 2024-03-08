<?php

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ComposerController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\MusicController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['middleware' => 'cors'], function () {
    Route::get('/music', [MusicController::class, 'index']);
    Route::post('/music/create', [MusicController::class, 'store']);
    Route::get('/music/{id}', [MusicController::class, 'show']);
    Route::put('/music/{id}', [MusicController::class, 'update']);
    Route::delete('/music/{id}', [MusicController::class, 'destroy']);

    Route::get('/composer', [ComposerController::class, 'index']);
    Route::post('/composer/create', [ComposerController::class, 'store']);
    Route::get('/composer/{id}', [ComposerController::class, 'show']);
    Route::put('/composer/{id}', [ComposerController::class, 'update']);
    Route::delete('/composer/{id}', [ComposerController::class, 'destroy']);

    Route::get('/artist', [ArtistController::class, 'index']);
    Route::post('/artist/create', [ArtistController::class, 'store']);
    Route::get('/artist/{id}', [ArtistController::class, 'show']);
    Route::put('/artist/{id}', [ArtistController::class, 'update']);
    Route::delete('/artist/{id}', [ArtistController::class, 'destroy']);

    // Route::get('/artist', [ArtistController::class, 'index']);
    // Route::post('/artist/create', [ArtistController::class, 'store']);
    // Route::get('/artist/{id}', [ArtistController::class, 'show']);
    // Route::put('/artist/{id}', [ArtistController::class, 'update']);
    // Route::delete('/artist/{id}', [ArtistController::class, 'destroy']);
    
    Route::get('/post', [PostController::class, 'index']);
    Route::post('/post/create', [PostController::class, 'store']);
    Route::get('/post/{id}', [PostController::class, 'show']);
    Route::put('/post/{id}', [PostController::class, 'update']);
    Route::delete('/post/{id}', [PostController::class, 'destroy']);

    Route::get('/user', [UserController::class, 'index']);
    Route::post('/user/login', [UserController::class, 'login']);
    Route::post('/user/registration', [UserController::class, 'register']);
    Route::post('/user/create', [UserController::class, 'store']);
    Route::get('/user/{id}', [UserController::class, 'show']);
    Route::put('/user/{id}', [UserController::class, 'update']);
    Route::delete('/user/{id}', [UserController::class, 'destroy']);

    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::post('/auth/login', [AuthController::class, 'login']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);

    Route::get('/genre', [GenreController::class, 'index']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
