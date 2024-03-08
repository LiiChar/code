<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index() {
        return Post::with('author')->get();
    }

    public function store(Request $request) {
        $postValidate = $request->validate([
            'name' => 'required',
            'text' => 'required',
            'user_id' => 'required',
        ]);

        $image = $request->file('image')->store('stuff/image/post', ['disk' => 'public_storage']);

        $postValidate['image'] = $image;

        Post::create($postValidate);

    }

    public function show(Request $request) {
        $music = Post::find($request->get('id'));
        return $music;
    }

    public function update(Request $request) {
        $music = Post::find($request->get('id'));
        
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
        return Post::destroy($request->get('id'));
    }
}
