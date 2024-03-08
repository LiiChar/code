<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../style/style.css">
</head>

<body>
    <?php
    // Основная страница
    session_start();
    require_once('../database/db_connect.php');

    // Проверка на авторизацию пользовтеля 
    if (!empty($_SESSION['user']['username']) && getUserByUsername($db, $_SESSION['user']['username'])) {
        // Вызываем станицу pages/main.php
        require_once('../pages/main.php');
    } else {
        //Вызываем станицу неавторизованного пользовтеля
        header('Location: ../pages/login.php');
    }


    ?>
</body>

</html>