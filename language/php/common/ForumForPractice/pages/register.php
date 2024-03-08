<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/style.css">
    <title>Registration</title>
</head>

<body>
    <?php
    session_start();
    // обработка ошибок
    if (array_key_exists("error", $_SESSION) && $_SESSION['error']) { ?>
        <div class="error"><?php print($_SESSION['error']); ?></div>
    <?php }
    // форма регистрации
    ?>

    <div class="form_wrapper">
        <form class="form_register" action="../action/register.php" method="post">
            <div class="form_input_div">
                <div>Имя</div>
                <input type="text" name='firstname'>
            </div>
            <div class="form_input_div">
                <div>Фамилия</div>
                <input type="text" name='lastname'>
            </div>
            <div class="form_input_div">
                <div>Логин</div>
                <input type="text" name='username'>
            </div>
            <div class="form_input_div">
                <div>Пароль</div>
                <input type="text" name='password'>
            </div>
            <div class="form_input_div">
                <div>Биография</div>
                <textarea name="bio"></textarea>
            </div>
            <div>У вас есть аккаунт?<a href="../pages/login.php">войдите</a></div>
            <input type="submit" value="Зарегестрироваться" />
        </form>
    </div>
</body>

</html>