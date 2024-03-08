<link rel="stylesheet" href={{ asset('css/auth.css')}}>

<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
    <div style="width: 40%; height: 3   0%;">
        <form style="display: flex; flex-direction: column;" action="/auth/authentificate" method="post">
            @csrf
            <label for="username">Имя пользователя</label>
            <input name="name" require id="username" type="text">
            <label for="email">Емаил</label>
            <input name="email" require id="email" class='' type="email">
            <label for="password">Пароль</label>
            <input autocomplete="on" name="password" id="password" type="password" require>
            <button type="submit">Зарегестрироваться</button>
            @error('email')
                <div class="alert alert-danger">{{$message}}</div>
            @enderror
        </form>
    </div>
</div>