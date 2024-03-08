<head>
    <title>One</title>
    <link rel="stylesheet" href={{ asset('css/main.css')}}>
</head>
<div style="height: 50px; display:flex; width: 100%; flex-direction: row; justify-content: space-around; align-items: center">
    <div><a href="/">Blogs</a></div>

    @auth
    <div><a href="/user/{{Auth::user() -> id}}">{{Auth::user() -> name}}</a></div>
    @endauth

    @auth
    <div><a href="/blogs/create">создать блог</a></div>
    @endauth

    @guest
    <div><a href="/auth/register">Зарегестрироваться</a></div>
    @endguest
</div>