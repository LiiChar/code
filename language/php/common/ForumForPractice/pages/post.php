<!DOCTYPE html>
<html lang="en">
<?php
session_start();
require_once("../database/db_connect.php");
if (empty($_SESSION['user']['username']) || getUserByUsername($db, $_SESSION['user']['username']) == false) {
    header('Location: ../pages/login.php');
}
$post;
if (!empty($_GET) && $_GET['post_id']) {
    $post = getPostById($db, $_GET['post_id']);
}
$order = "ORDER BY updated_at DESC";
if (!empty($_GET) && array_key_exists("order", $_GET) && $_GET['order']) {
    switch ($_GET['order']) {
        case "old":
            $order = "ORDER BY updated_at ASC";
            break;
        case "new":
            $order = "ORDER BY updated_at DESC";
            break;
        case "popular":
            $order = "ORDER BY like";
            break;
    }
}
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/style.css">
    <title><?php print($post['heading']) ?></title>
</head>

<body>
    <?php
    $user = getUserById($db, $post["user_id"]);
    $comments = getCommentsByPostId($db, $post["id"], $order);

    require_once("../components/header.php");
    ?>
    <div style="padding: 10px 20vw 10px 20vw; height: fit-content;" class="post_wrapper">
        <!-- <div class="icon_user">

            <img class="icon_post_id" src="../assets/user.png" alt="user icon">
        </div> -->

        <div class="post_info_id">

            <div>
                <a href="../pages/profile.php?username=<?php print($user["username"]) ?>" class="post_author_name"><?php print_r($user["username"])  ?></a>
                <span class="post_date"><?php print(date_parse($post["updated_at"])["hour"] + 5 . ":" . date_parse($post["updated_at"])["minute"]) ?></span>
            </div>
            <a href="../pages/post.php?post_id=<?php print($post["id"]) ?>" class="post_heading"><?php print_r($post["heading"] . '<br>') ?></a>
            <div style=" height: fit-content;" class="post_body">
                <div class='staff'>
                    <?php
                    if ($post["type_img"] == "image") {
                        print("<img class='staff' src='{$post['image']}' alt='post img' />");
                    } else if ($post["type_img"] == "video") {
                        print("<video controls class='staff' src='{$post['image']}' autoplay> </video>");
                    }
                    ?>
                </div>
                <div>
                    <?php print_r($post["body"]) ?>

                </div>
            </div>
            <div>
                <span>
                    <a class="post_like" style="<?php getLikeByTypePostId($db, $_SESSION['user']["username"], $post["id"], 'posts') ? print("color: red") : print("inherit") ?>" href=<?php print("../action/addLikes.php?type=posts&id=" . $post["id"]) ?>>&#10084 </a>
                    <?php print(getCountLikesByTypePostId($db, $post["id"], 'posts')) ?></span>
            </div>
        </div>

    </div>
    <div class="message">
        <div class="message_wrapper">
            <div class="message_info">
                <span><?php print(count($comments)) ?> сообщений |</span>
                <form action="../action/changeOrderMessage.php" method="get">Упорядочить по
                    <select onchange="this.form.submit()" name="order">
                        <option <?php array_key_exists("order", $_GET) && $_GET['order'] == "new" ? print("selected") : "" ?> value="new"><button type="submit">новым</button></option>
                        <option <?php array_key_exists("order", $_GET) && $_GET['order'] == "old" ? print("selected") : "" ?> value="old"><button type="submit">старым</button></option>
                        <option <?php array_key_exists("order", $_GET) && $_GET['order'] == "popular" ? print("selected") : "" ?> value="popular"><button type="submit">популярные</button></option>
                    </select>
                </form>
            </div>
            <div class="message_wrapper_input">
                <img class="message_img" src="../assets/user.png" alt="user icon">
                <form class="message_input_wrapper" action="../action/addComment.php" method="post">
                    <div class="message_input">
                        <input placeholder="Напишите ваше мнение..." class="message_input_input" name="body" type="text">
                        <input style="display: none;" name="post_id" value="<?php print($post['id']); ?>" type="text">
                    </div>
                    <div class="message_input_actios">
                        <button type="button" class="message_input_close">Отмена</button>
                        <button type="submit" class="message_input_apply">Написать</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
    <?php
    require("../components/comments_list.php");
    ?>
</body>

</html>