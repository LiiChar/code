<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use App\Models\PostTag;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('blog.index', [
            'posts' => Post::select('*')->orderBy('created_at', 'desc')->get()
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        $tags = Tag::all();

        return view('blog.create', [
            'categories' => $categories,
            'tags' => $tags,
        ]);
    }

    public function store(Request $request)
    {
        $req = $request->validate([
            'title' => ['required'],
            'content' => ['required'],
            'category_id' => ['required'],
            'image_post' => ['required']
        ]);

        $req['image_post'] = request()->file('image_post')->store('avatar', ['disk' => 'my_public_folder']);
        $req['users_id'] = Auth::user() -> id;
        
        $post = Post::create($req);

        PostTag::create([
            'post_id' => $post -> id,
            'tag_id' => $request -> tags,
        ]); 

        return redirect('/blogs');
    }

    public function show(string $id)
    {
        $post = Post::where('id', $id)->get()[0];

        return view('blog.show', [
            'post' => $post
        ]);
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
