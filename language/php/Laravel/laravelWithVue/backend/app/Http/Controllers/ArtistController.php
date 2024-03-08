<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use Illuminate\Http\Request;

class ArtistController extends Controller
{
    public function index(Request $request) {
        return Artist::all();
    }

    public function store(Request $request) {
        $artistValidate = $request->validate([
            'username' => 'required',
            'full_name' => 'required',
            'about' => 'required',
        ]);

        $photo = $request->file('photo')->store('photo');

        $artistValidate['photo'] = $photo;

        Artist::create($artistValidate);

    }

    public function show(Request $request) {
        $artist = Artist::find($request->get('id'));
        $artist->audition = $artist->audition + 1;
        $artist->save();
        return $artist;
    }

    public function update(Request $request) {
        $artist = Artist::find($request->get('id'));
        if ($request->username) {
            $artist->username = $request->username;
        }
        if ($request->full_name) {
            $artist->full_name = $request->full_name;
        }
        if ($request->about) {
            $artist->about = $request->about;
        }
        if ($request->artist) {
            $artist->artist = $request->artist;
        }
        $artist->save();
        return $artist;
    }

    public function destroy(Request $request) {
        return Artist::destroy($request->get('id'));
    }
}
