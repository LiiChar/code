<?php
session_start();
if (empty($_SESSION['user']['firstname'])) {
    header('Location: ../forum/index.php');
} else
    if (!empty($_POST)) {
    if (!empty($_POST['comment_id']) && !empty($_POST['post_id'])) {
        require_once('../database/db_connect.php');
        // удаление коментария
        deleteCommentById($db, $_POST['comment_id']);
        header('Location: ../pages/post.php?post_id=' . $_POST['post_id']);
    } else {
        $_SESSION['error'] = 'Пришла неполная форма';
        header('Location: ../pages/post.php?post_id=' . $_POST['post_id']);
    }
} else {
    $_SESSION['error'] = 'Форма не пришла';
    header('Location: ../pages/post.php?post_id=' . $_POST['post_id']);
}
