<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function store (Request $request) {
        $comment = $request->validate([
            'text' => ['required'],
            'post_id' => ['required']
        ]);

        $comment['user_id'] = Auth::user() -> id;


        Comment::create($comment);

        return redirect('/blogs/' . $request -> post_id);
    }
}
