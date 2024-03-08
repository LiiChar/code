<article class="comment_wrapper">
    <div class="comment_info">
        <img class="comment_user_image" src="../assets/user.png" alt="user_icon">
        <div>
            <div>
                <a href="../pages/profile.php?username=<?php print($userCom["username"]) ?>" class="post_author_name"><?php print_r($userCom["username"])  ?></a>
                <span class="post_date"><?php print(date_parse($comment["updated_at"])["hour"] + 5 . ":" . date_parse($comment["updated_at"])["minute"]) ?></span>
            </div>
            <div><?php print ($comment['body']) . '<br>'; ?></div>
            <div><a href=<?php print("../action/addLikes.php?type=comments&id=" . $comment["id"]) ?>>&#10084 <?php print(getCountLikesByTypePostId($db, $comment["id"], 'comments')) ?></a></div>
        </div>

    </div>
    <?php // форма для удаления комментария
    ?>
    <div class="comment_delete_message">
        <form action="../action/deleteComment.php
        " method="post">
            <input type="hidden" value='<?php print($post['id']) ?>' require_once name='post_id'>
            <input type="hidden" value='<?php print($comment['id']) ?>' require_once name='comment_id'>
            <?php $userCom["username"] == $user["username"] ? print('<button class="comment_delete_message_button" type="submit">X</button>') : "" ?>
        </form>
    </div>
</article>