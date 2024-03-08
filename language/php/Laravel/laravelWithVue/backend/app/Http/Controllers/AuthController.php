<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $userValidate = $request->validate([
            "name" => "nullable|max:255|string",
            "email" => "required|email",
            "password" => "nullable",
            "photo" => "nullable|file",
            "location" => "nullable",
            "date_birthday" => "nullable",
            "about_me" => "nullable",
        ]);

        if (!empty((User::where('email', $userValidate['email'])->get())[0])) {
            return Response(true, 201);
        } else {
            // if ($userValidate['date_birthday']) {
            //     $userValidate['age'] = ((int)date("Y")) - ((int)substr($userValidate['date_birthday'], -4));
            // }

            $userValidate['password'] = password_hash($userValidate['password'], PASSWORD_DEFAULT);

            $user = User::create($userValidate);

            auth()->login($user);

            $fetchUser = User::find($user['id']);

            $fetchUser['subscription'] = $fetchUser->subscription;

            return Request($fetchUser, 200) ;
        }
    }

    public function login(Request $request)
    {
        $userValidate = $request->validate([
            "email" => "required|email",
            "password" => "nullable",
        ]);

        $user = User::where('email', $userValidate['email'])->get();

        dump($user);

        if (empty($user)) {
            return Response(false, 201);
        } else if (array_key_exists('email', $userValidate) && !array_key_exists('password', $userValidate)) {
            return Response(true, 201);;
        } else if (password_verify($userValidate['password'], $user['password'])) {

            $user['subscription'] = $user->subscription;

            auth()->login($user);

            return Response($user, 200);
        } else {
            return Response(false, 201);
        }
    }

    public function logout()
    {
        auth()->logout();
    }
}
