<x-layout.header /> 
<div>
    <div>{{$post -> title}} {{$post -> author -> name}}</div>
    <div style="margin: 10px 0 10px 0;">
        {{$post -> content}}
    </div>
    <div>
        <div>
            <form action="/comment/store" method="post">
                @csrf
                <input name="text" require placeholder="Комментарии" type="text">
                <input name="post_id" hidden value={{$post -> id}} type="text">
                <button type="submit">Написать</button>
            </form>
        </div>
        <div>
            @foreach($post -> comments as $comment)
            <div style="margin-bottom: 20px;">
                <div>
                    {{$comment -> author -> name}}
                </div>
                <div>
                    {{$comment -> text}}
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>