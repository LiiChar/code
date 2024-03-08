<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class LoginController extends Controller
{

    public function register () {
        return view('/auth/registration');
    }

    public function login () {
        return view('/auth/login');
    }

    public function authentificate(Request $request) {
        $credentials = $request->validate([
            'name' => ['string'],
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        $credentials['password'] = password_hash($credentials['password'], PASSWORD_DEFAULT);
        $credentials['email_verified_at'] = now();
        $credentials['remember_token'] = Str::random(10);
        
        $user = User::create($credentials);

        auth()->login($user);

        return redirect('blogs')->with('success', 'Account successfully registered.');
    }
}
