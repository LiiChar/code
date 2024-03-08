<?php
session_start();
if (array_key_exists('user', $_SESSION) && $_SESSION['user']) {
    header('Location: ../forum/index.php');
} elseif (!empty($_POST)) {
    if (!empty($_POST['username']) && !empty($_POST['password'])) {

        require_once('../database/db_connect.php');
        // получение пользователя по нику
        $statement = $db->prepare('SELECT * FROM users WHERE `username` = :username');
        $statement->bindParam(':username', $_POST['username']);
        $res = $statement->execute();
        $res = $res->fetchArray(SQLITE3_ASSOC);
        // проверка на наличие пользователя в бд
        if ($res) {
            // проверка пароля от пользователя и зашифрованного пароля
            if (md5($_POST['password']) == $res['password']) {
                // добавление пользователя в сессии
                $_SESSION['user'] = [
                    'username' => $res['username'],
                    'firstname' => $res['firstname'],
                    'lastname' => $res['lastname'],
                    'bio' => $res['bio']
                ];
                header('Location: ../forum/index.php');
            } else {
                $_SESSION['error'] = 'Не верный пароль или логин';
                header('Location: ../pages/login.php');
            }
        } else {
            $_SESSION['error'] = 'Такой пользователь не зарегестрирован';
            header('Location: ../pages/login.php');
        }
    } else {
        $_SESSION['error'] = 'Пришла не полная форма';
        header('Location: ../pages/login.php');
    }
} else {
    $_SESSION['error'] = 'Форма не пришла';
    header('Location: /loginar.php');
}
