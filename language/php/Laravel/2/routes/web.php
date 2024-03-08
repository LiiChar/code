<?php

use App\Http\Controllers\IngredientContoller;
use App\Http\Controllers\ReceptContoller;
use App\Http\Controllers\TypeController;
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

Route::get('/', function () {
    return view('welcome');
});