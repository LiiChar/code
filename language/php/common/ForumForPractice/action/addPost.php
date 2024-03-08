<?php
session_start();
if (empty($_SESSION['user']['firstname'])) {
    header('Location: ../forum/index.php');
} else {
    $file_path = null;
    $file_type = null;
    if (array_key_exists("userfile", $_FILES) && $_FILES['userfile']) {
        $uploaddir = '../uploads/';
        $uploadfile = $uploaddir . basename($_FILES['userfile']['name']);
        $uploadImageName = trim(strip_tags($_FILES['userfile']['name']));

        $extension = pathinfo($uploadImageName, PATHINFO_EXTENSION);
        if ($extension == "png" or $extension == "jpeg" or $extension == "jpg") {
            $file_type = "image";
        } else if ($extension == "mp4") {
            $file_type = "video";
        }
        $file_path = $uploadfile;
        move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile);
    }
    //добавление поста в бд 
    if (!empty($_POST)) {
        if (!empty($_POST['heading']) && !empty($_POST['body'])) {
            require_once('../database/db_connect.php');
            $user = getUserByUsername($db, $_SESSION['user']['username']);
            var_dump($user, $_SESSION['user']['username']);

            $statement = $db->prepare('INSERT INTO `posts` (`heading`, `image`, `type_img`, `body`, `user_id`)
            VALUES (:heading, :image, :type_img, :body, :user_id)');
            $statement->bindParam(
                ':heading',
                $_POST['heading'],
            );
            if ($file_path and $file_type) {
                $statement->bindParam(
                    ':image',
                    $file_path,
                );
                $statement->bindParam(
                    ':type_img',
                    $file_type,
                );
            }
            $statement->bindParam(
                ':body',
                $_POST['body'],
            );
            $statement->bindParam(
                ':user_id',
                $user['id'],
            );

            $statement->execute();
            header('Location: ../forum/index.php');
        } else {
            $_SESSION['error'] = 'Пришла неполная форма';
            header('Location: ../pages/addpost.php');
        }
    } else {
        $_SESSION['error'] = 'Форма не пришла';
        header('Location: ../pages/addpost.php');
    }
}
