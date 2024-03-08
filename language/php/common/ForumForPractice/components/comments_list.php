<section class="comment_list">
    <?php
    foreach ($comments as $keys => $comment) {
        //получение автора комментария
        $userCom = getUserById($db, $comment['user_id']);
        // визуализация комментария
        require("../components/comment.php");
    }
    ?>
</section>