<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware gr87houp. Make something great!
|
*/

Route::get('/', [BlogController::class, 'index'])->name('blogs.index');

Route::get('/blogs', [BlogController::class, 'index'])->name('blogs.index');
Route::get('/blogs/create', [BlogController::class, 'create'])->name('blogs.create');
Route::post('/blogs/store', [BlogController::class, 'store'])->name('blogs.store');
Route::get('/blogs/{id}', [BlogController::class, 'show'])->name('blogs.show');

Route::post('/comment/store', [CommentController::class, 'store'])->name('comment.store');

Route::get('/user/{id}', [UserController::class, 'index'])->name('user.index');

Route::get('/auth/login', [LoginController::class, 'login'])->name('auth.login');
Route::get('/auth/register', [LoginController::class, 'register'])->name('auth.register');
Route::post('/auth/authentificate', [LoginController::class, 'authentificate'])->name('auth.authentificate');
