<div style="margin-bottom: 30px;">
    <div >
        <a style="font-size: 26px;" href="/blogs/{{$post -> id}}">{{$post -> title}}</a> 
        <span>{{$post -> author -> name}}</span>
    </div>
    <div>{{$post -> tags[0] -> title}}</div>
    <div style="margin: 10px; width: 100%; height: min-content;">
        <img class="imgag{{$post -> id}}" onerror="handleError" style="object-fit: cover; width: calc(100% - 20px);" height="100%" src={{asset($post -> image_post)}} alt="image_post">
    </div>
    <div>   
        {{$post -> content}}
    </div>
    <a class="linkBorder" href="/blogs/{{$post -> id}}">Узнать больше</a>
</div>

<script>

    function handleError (e) {
        e.target.src = 'http://127.0.0.1:8000/avatar/PXYPXQvz5dbA29qy99yLs68xjFx3ubYOyxKkI56i.png'
    }
</script>