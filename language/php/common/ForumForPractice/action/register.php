<?php
require_once('../database/db_connect.php');

session_start();
if (array_key_exists('user', $_SESSION) && $_SESSION['user'] && getUserByUsername($db, $_SESSION['user']['username'])) {
    header('Location: ../forum/index.php');
} else {
    if (!empty($_POST)) {
        if (!empty($_POST['username']) && !empty($_POST['password']) && !empty($_POST['firstname']) &&  !empty($_POST['lastname'])) {
            $bio = null;
            if ($_POST['bio']) {
                $bio =  $_POST['bio'];
            }
            // получение индетификатора пользателя по нику
            $stmt  = $db->prepare('SELECT id FROM users WHERE username = :username');
            $stmt->bindParam(':username', $_POST['username']);
            $res = $stmt->execute();
            // проверка на наличие пользоввателя
            $resultArray =  $res->fetchArray(SQLITE3_ASSOC);
            // var_dump($resultArray);
            if ($resultArray == false) {
                // добавление пользователя в бд
                $statement = $db->prepare('INSERT INTO users (`lastname`, `firstname`, `username`, `password`, `bio`) VALUES (:lastname, :firstname, :username, :password, :bio)');
                $statement->bindParam(
                    ':lastname',
                    $_POST['lastname'],
                );
                $statement->bindParam(
                    ':firstname',
                    $_POST['firstname'],
                );
                $statement->bindParam(
                    ':username',
                    $_POST['username'],
                );
                $statement->bindParam(
                    ':password',
                    md5($_POST['password']),
                );
                $statement->bindParam(
                    ':bio',
                    $_POST['bio'],
                );

                $statement->execute();

                $_SESSION['user'] = [
                    'username' => $_POST['username'],
                    'firstname' => $_POST['firstname'],
                    'lastname' => $_POST['lastname'],
                    'bio' => $_POST['BIO']
                ];
                header('Location: ../forum/index.php');
            } else {
                $_SESSION['error'] = 'Такой пользователь уже существует';
                header('Location: ../pages/register.php');
            }
        } else {
            $_SESSION['error'] = 'Пришла неполная форма регистрации.';
            header('Location: ../pages/register.php');
        }
    } else {
        $_SESSION['error'] = 'Пришла пустая форма регистрации.';
        header('Location: ../pages/register.php');
    }
}
