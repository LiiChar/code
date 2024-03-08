<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/style.css">
    <title>login</title>
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
        <form class="form" action="../action/loginar.php" method="post">
            <div class="form_input_div">
                <div>Логин</div>
                <input type="text" name='username'>
            </div>
            <div class="form_input_div">
                <div>Пароль</div>
                <input type="text" name='password'>
            </div>
            <div class="link_another">Вы не зарегестрирвоаны<a href="../pages/register.php">зарестрируйтесь</a></div>
            <button type="submit">Войти</button>
        </form>
    </div>
</body>

</html>