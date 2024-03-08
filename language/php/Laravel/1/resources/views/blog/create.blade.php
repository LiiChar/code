<x-layout.header />
<div>
    <div style="display: flex; justify-content: center; width: 100%; height: 100%;">
        <form style="display: flex; flex-direction: column; width: 70%;" action="/blogs/store" method="post" enctype="multipart/form-data">
            @csrf
            <label require for="title">Название</label>
            <input name="title" style="margin-bottom: 20px;" id='title' type="text">

            <label require for="content">Текст</label>
            <textarea name="content" style="margin-bottom: 20px; width: 100%;" id="content" rows="10"></textarea>

            <label for="image">Загрузите изображение</label>
            <input style="margin-bottom: 20px;" id="image" name="image_post" type="file" />

            <div style="display: flex; flex-direction: row; justify-content: space-between;">
                <div style="display: flex; flex-direction: row;">
                    <select require name="category_id" id='category'>
                        @foreach ($categories as $category)
                        <option value={{$category -> id}}>{{$category -> title}}</option>
                        @endforeach
                    </select>
                    <select require multiple size="3" name="tags" id='tag'>
                        @foreach ($tags as $tag)
                        <option value={{$tag -> id}}>{{$tag -> title}}</option>
                        @endforeach
                    </select>
                </div>
                <button type="submit">Создать пост</button>
            </div>

        </form>
    </div>
</div>