<?php

namespace App\Http\Controllers;

use App\Models\Music;
use Illuminate\Http\Request;

class MusicController extends Controller
{
    public function index(Request $request) {
        return Music::with('genre')->with('composeres')->get();
    }

    public function store(Request $request) {
        $musicValidate = $request->validate([
            'name' => 'required',
            'genre_id' => 'required|integer',
            'composer_id' => 'required|integer',
        ]);

        $musicValidate['genre_id'] = (int)$musicValidate['genre_id'];
        $musicValidate['composer_id'] = (int)$musicValidate['composer_id'];

        $cover = $request->file('cover')->store('/stuff/image/cover/music', ['disk' => 'public_storage']);
        $music = $request->file('music')->store('stuff/music', ['disk' => 'public_storage']);

        $musicValidate['cover'] = $cover;
        $musicValidate['music'] = $music;

        $music = Music::create($musicValidate);
    }

    public function show(Request $request) {
        $music = Music::find($request->get('id'));
        $music->audition = $music->audition + 1;
        $music->save();
        return $music;
    }

    public function update(Request $request) {
        $music = Music::find($request->get('id'));
        if ($request->name) {
            $music->name = $request->name;
        }
        if ($request->genre_id) {
            $music->genre = $request->genre;
        }
        if ($request->cover) {
            $music->cover = $request->cover;
        }
        if ($request->music) {
            $music->music = $request->music;
        }
        $music->save();
        return $music;
    }

    public function destroy(Request $request) {
        return Music::destroy($request->get('id'));
    }
}
