<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request) {
        return User::with('subscription')->get();
    }

    public function store(Request $request) {
        $userValidate = $request->validate([
            'name' => 'required',
            'genre_id' => 'required|integer',
            'composer_id' => 'required|integer',
        ]);

        $user = User::create($userValidate);
    }

    public function show(Request $request) {
        $music = User::find($request->get('id'));
        return $music;
    }

    public function update(Request $request) {
        $user = User::find($request->get('id'));

        $userValidate = $request->validate([
            'name' => 'nullable',
            'photo' => 'nullable',
            'cover' => 'nullable',
            'location' => 'nullable',
            'date_birthday' => 'nullable',
            'about_me' => 'nullable',
        ]);

        $user->fill([
            'name' => array_key_exists('name', $userValidate) ?  $userValidate['name'] : $user['name'],
            'photo' => array_key_exists('name', $userValidate) ?  $userValidate['name'] : $user['name'],
            'cover' => array_key_exists('name', $userValidate) ?  $userValidate['name'] : $user['name'],
            'location' => array_key_exists('name', $userValidate) ?  $userValidate['name'] : $user['name'],
            'date_birthday' => array_key_exists('name', $userValidate) ?  $userValidate['name'] : $user['name'],
            'about_me' => array_key_exists('name', $userValidate) ?  $userValidate['name'] : $user['name'],
        ]);

        $user->save();

        return $user;
    }

    public function destroy(Request $request) {
        return User::destroy($request->get('id'));
    }
}
