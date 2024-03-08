<?php
session_start();
// Проверка на авторизации
if (empty($_SESSION['user']['firstname'])) {
    header('Location: ../forum/index.php');
} else {
    if (!empty($_POST)) {
        if (!empty($_POST['post_id']) && !empty($_POST['body'])) {
            require_once('../database/db_connect.php');
            // получение идентфикатора по имени пользователя
            $user = getUserByUsername($db, $_SESSION['user']['username']);

            //добавление комментариев в бд 
            $statement = $db->prepare('INSERT INTO `comments` (`body`, `user_id`, `post_id`)
            VALUES (:body, :user_id, :post_id)');
            $statement->bindParam(
                ':body',
                $_POST['body'],
            );
            $statement->bindParam(
                ':user_id',
                $user["id"],
            );
            $statement->bindParam(
                ':post_id',
                $_POST['post_id'],
            );

            $statement->execute();
            header('Location: ../pages/post.php?post_id=' . $_POST['post_id']);
        } else {
            $_SESSION['error'] = 'Пришла неполная форма';
            header('Location: ../pages/addpost.php');
        }
    } else {
        $_SESSION['error'] = 'Форма не пришла';
        header('Location: ../pages/addpost.php');
    }
}
