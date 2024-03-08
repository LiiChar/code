<?php

session_start();
if (isset($_SESSION['user'])) {
    if (!empty($_GET)) {
        if (!empty($_GET['type']) && !empty($_GET['id'])) {
            require_once('../database/db_connect.php');
            // получение аундефикатора по имени пользователя
            $user = getUserByUsername($db, $_SESSION['user']['username']);
            // получения лайка поставленного пользователем
            $like = getLikeByTypePostId($db, $user["id"], $_GET['id'], $_GET['type']);

            if ($like) {
                // Удаление лайка
                deleteLikeById($db, $like["id"]);
            } else {
                // Добавление лайка
                createLike($db, $user["id"], $_GET['id'], $_GET['type']);
            }
            header('Location: ' . $_SERVER['HTTP_REFERER']);
        } else {
            $_SESSION['errors'] = 'Куда ставить лайк?!';
            header('Location: /');
        }
    } else {
        $_SESSION['errors'] = 'Куда ставить лайк?';
        header('Location: /');
    }
} else {
    header('Location: /index.php');
}
