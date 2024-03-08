<?php

session_start();

if ($_SESSION['user']) {
    if (!empty($_POST)) {
        require_once('../db_connect.php');
        // получение пользовтеля по никнейму                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        $statements = $db->prepare('SELECT `id`, `username`, `lastname`, `firstname`, `bio`, `password` FROM users WHERE username = ?');
        $statements->bindParam('s', $_SESSION['user']['username']);
        $statements->execute();
        $data = $statements->get_result()->fetch_assoc();
        $bio = null;
        if (empty($_POST['bio'])) {
            $bio =  $data['bio'];
        } else {
            $bio = $_POST['bio'];
        }

        $lastname = null;
        if (empty($_POST['lastname'])) {
            print('ln');
            $lastname =  $data['lastname'];
        } else {
            $lastname = $_POST['lastname'];
        }

        $firstname = null;
        if (empty($_POST['firstname'])) {
            $firstname =  $data['firstname'];
        } else {
            $firstname = $_POST['firstname'];
        }

        $username = null;
        if (empty($_POST['username'])) {
            $username =  $data['username'];
        } else {
            $username = $_POST['username'];
        }

        $password = null;
        if (empty($_POST['password'])) {
            $password =  $data['password'];
        } else {
            $password = $_POST['password'];
        }
        // изменение свойств пользователя
        $statement = $db->prepare(' UPDATE users SET `lastname` = ?, `firstname` = ?, `username` = ?, `password` = ?, `bio` = ? WHERE `id` = ?');
        $statement->bindParam(
            'ssssss',
            $lastname,
            $firstname,
            $username,
            $password,
            $bio,
            $data['id']
        );
        $statement->execute();
        // изменение сессии пользователя
        $_SESSION['user'] = [
            'username' => $username,
            'firstname' => $firstname,
            'lastname' => $lastname,
            'bio' => $bio
        ];
        header('Location: ../forum/index.php');
    } else {
        $_SESSION['error'] = 'Пришла неполная форма регистрации.';
        header('Location: ./pages/changeUserPage.php');
    }
} else {
    $_SESSION['error'] = 'Пришла пустая форма регистрации.';
    header('Location: ./pages/changeUserPage.php');
}
