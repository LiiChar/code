<div>
    <div>
        <form action="/comment/store" method="post">
            <input name="text" require placeholder="Комментарии" type="text">
            <input name="post_id" hidden value={{$post -> id}} type="text">
            <button type="submit">Написать</button>
        </form>
    </div>
</div>