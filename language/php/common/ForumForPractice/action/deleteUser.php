<?php
session_start();
require_once("../database/db_connect.php");
if (array_key_exists("user_id", $_POST)) {
    deleteUserById($db, $_POST['user_id']);
    session_start();
    session_destroy();
    header('Location: ../forum/index.php');
} else {
    header('Location: ../pages/profile.php');
}
