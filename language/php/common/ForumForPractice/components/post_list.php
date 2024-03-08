<section class="post_list">
    <div class="add_post_link_wrapper">
        <a class="add_post_link" href="../action/addPost.php">Добавить запись</a>
    </div>

    <?php
    foreach ($posts as $key => $post) {
        // запрос на полученте комментариев по индетификатору поста 
        $comment = getCommentsByPostId($db, $post["id"]);
        //получение автора поста
        $user = getUserById($db, $post["user_id"]);
        // визуализация поста   
        require("../components/post.php");
    }
    ?>
</section>