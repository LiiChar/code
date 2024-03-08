<?php

namespace App\Http\Controllers;

use App\Models\Сomposer;
use Illuminate\Http\Request;

class ComposerController extends Controller
{
    public function index(Request $request) {
        return Сomposer::all();
    }

    public function store(Request $request) {
        $composerValidate = $request->validate([
            'username' => 'required',
            'full_name' => 'required',
            'about' => 'required',
        ]);

        $composer = $request->file('photo')->store('photo');
        $musicValidate['photo'] = $composer;

        Сomposer::create($composerValidate);
    }

    public function show(Request $request) {
        $composer = Сomposer::find($request->get('id'));
        $composer->save();
        return $composer;
    }

    public function update(Request $request) {
        $music = Сomposer::find($request->get('id'));
        if ($request->username) {
            $music->username = $request->username;
        }
        if ($request->full_name) {
            $music->full_name = $request->full_name;
        }
        if ($request->about) {
            $music->about = $request->about;
        }
        $music->save();
        return $music;
    }

    public function destroy(Request $request) {
        return Сomposer::destroy($request->get('id'));
    }
}
