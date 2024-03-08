<?php
// Подключение к базе данных



function create_databases(): SQLite3
{
    $db = new SQLite3(
        "../database/forum.sqlite"
    );

    $db->exec('CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY NOT NULL,
        username TEXT UNIQUE NOT NULL,
        firstname TEXT NOT NULL, 
        lastname TEXT NOT NULL,
        password TEXT NOT NULL,
        bio TEXT, 
        created_at DEFAULT CURRENT_TIMESTAMP NOT NULL, 
        updated_at DEFAULT CURRENT_TIMESTAMP NOT NULL
        );');

    $db->exec('CREATE TABLE IF NOT EXISTS posts(
        id          INTEGER PRIMARY KEY NOT NULL,
        heading     TEXT UNIQUE NOT NULL,
        body        TEXT NOT NULL,
        image       TEXT NULL,
        type_img    TEXT NULL,
        user_id     INTEGER NOT NULL,
        created_at  DEFAULT CURRENT_TIMESTAMP NOT NULL,
        updated_at  DEFAULT CURRENT_TIMESTAMP NOT NULL,
        CONSTRAINT fk_user_posts
            FOREIGN KEY (user_id) 
                REFERENCES users (id) 
                    ON DELETE CASCADE 
    )');

    $db->exec('CREATE TABLE IF NOT EXISTS comments(
        id          INTEGER PRIMARY KEY NOT NULL,
        body        TEXT NOT NULL,
        user_id     INTEGER NOT NULL,
        post_id     INTEGER NOT NULL,
        created_at  DEFAULT CURRENT_TIMESTAMP NOT NULL,
        updated_at  DEFAULT CURRENT_TIMESTAMP NOT NULL,
        CONSTRAINT fk_user_comments
            FOREIGN KEY (user_id) 
                REFERENCES users (id) 
                    ON DELETE CASCADE,
        CONSTRAINT fk_post_comments
            FOREIGN KEY (post_id) 
                REFERENCES posts (id) 
                    ON DELETE CASCADE 
    )');

    $db->exec('CREATE TABLE IF NOT EXISTS likes(
        id          INTEGER PRIMARY KEY NOT NULL,
        likeable_type   TEXT NOT NULL,
        user_id     INTEGER NOT NULL,
        likable_id  INTEGER NOT NULL,
        created_at  DEFAULT CURRENT_TIMESTAMP NOT NULL,
        updated_at  DEFAULT CURRENT_TIMESTAMP NOT NULL,
        CONSTRAINT fk_user_likes
            FOREIGN KEY (user_id) 
                REFERENCES users (id) 
                    ON DELETE CASCADE
    )');

    $db->exec('PRAGMA foreign_keys=on;');

    return $db;
}

$db = create_databases();

function getUserByUsername($db, $username)
{
    // получения пользователя по имени
    $statements = $db->prepare('SELECT * FROM `users` WHERE `username` = :username');
    $statements->bindParam(':username', $username);
    return $statements->execute()->fetchArray(SQLITE3_ASSOC);
}

function deleteUserById($db, $user_id)
{
    $statement = $db->prepare('DELETE FROM `users` WHERE `id` = :user_id;');
    $statement->bindParam(
        ':user_id',
        $user_id,
    );
    $statement->execute();
}

function getLikesById($db, $id, $type)
{
    // количество лайков под постом или коментарием
    $statements = $db->prepare('SELECT * FROM `likes` WHERE `likable_id` = :likable_id AND `likeable_type` = :likeable_type;');
    $statements->bindParam(':likable_id', $id);
    $statements->bindParam(':likeable_type', $type);
    return $statements->execute()->fetchArray(SQLITE3_ASSOC);
}

function getUserById($db, $id)
{
    $statement = $db->prepare('SELECT * FROM `users` WHERE `id` = :id');
    $statement->bindParam(':id', $id);
    return $statement->execute()->fetchArray(SQLITE3_ASSOC);
}

function getPosts($db, $search = null)
{
    // sql запросы на получение постов из таблицы posts
    $statement = "";
    if ($search) {
        $statement = $db->prepare('SELECT * FROM posts WHERE heading LIKE "%' . $search . '%"');
    } else {
        $statement = $db->prepare('SELECT * FROM `posts`');
    }
    //получение всех постов
    $exec = $statement->execute();
    $post = [];
    while ($row = $exec->fetchArray(SQLITE3_ASSOC)) {
        array_push($post, $row);
    }
    return $post;
}
function getPostById($db, $post_id)
{
    $statement = $db->prepare('SELECT * FROM `posts` WHERE `id` = :id ORDER BY updated_at DESC');

    $statement->bindParam(
        ":id",
        $post_id
    );
    //получение всех постов
    return $statement->execute()->fetchArray(SQLITE3_ASSOC);
}

function getPostsByUserId($db, $user_id)
{
    $statement = $db->prepare('SELECT * FROM `posts` WHERE user_id = :user_id');
    $statement->bindParam(":user_id", $user_id);
    //получение всех постов
    $exec = $statement->execute();
    $post = [];
    while ($row = $exec->fetchArray(SQLITE3_ASSOC)) {
        array_push($post, $row);
    }
    return $post;
}

function deletePostsByUserId($db, $user_id)
{
    $statement = $db->prepare('DELETE FROM `posts` WHERE user_id = :user_id');
    $statement->bindParam(":user_id", $user_id);
    $statement->execute();
}

function deleteLikesBtUserId($db, $user_id)
{
    $statement = $db->prepare('DELETE FROM `likes` WHERE user_id = :user_id');
    $statement->bindParam(":user_id", $user_id);
    $statement->execute();
}

function getCommentsByPostId($db, $post_id, $order = "ORDER BY updated_at DESC")
{
    if ($order == "ORDER BY like") {
        $statements = $db->prepare('SELECT * from comments AS c LEFT JOIN likes AS l on (l.likable_id = c.id) GROUP BY c.id HAVING c.post_id = :post_id ORDER BY count(l.id)');
        $statements->bindParam(
            ':post_id',
            $post_id
        );
        $exec = $statements->execute();
        $comments = [];
        while ($row = $exec->fetchArray(SQLITE3_ASSOC)) {
            array_push($comments, $row);
        }
        return $comments;
    } else {
        $statements = $db->prepare('SELECT * FROM `comments` WHERE `post_id` = :post_id ' . $order);
        $statements->bindParam(
            ':post_id',
            $post_id
        );
        $exec = $statements->execute();
        $comments = [];
        while ($row = $exec->fetchArray(SQLITE3_ASSOC)) {
            array_push($comments, $row);
        }
        return $comments;
    }
}

function deleteCommentById($db, $id)
{
    $statement = $db->prepare('DELETE FROM `comments` WHERE `id` = :id;');
    $statement->bindParam(
        ':id',
        $id,
    );
    $statement->execute();
}

function getCountLikesByTypePostId($db, $post_id, $type)
{
    $query = $db->prepare('SELECT COUNT(*) as count
    FROM `likes` 
    WHERE `likeable_type` = :likeable_type  AND `likable_id` = :likable_id;');
    $query->bindParam(':likable_id', $post_id);
    $query->bindParam(':likeable_type', $type);
    return $query->execute()->fetchArray(SQLITE3_ASSOC)["count"];
}

function getLikeByTypePostId($db, $user_id, $post_id, $type)
{
    $query = $db->prepare('SELECT * FROM `likes` 
                                   WHERE `user_id` = :user_id AND `likeable_type` = :likeable_type  AND `likable_id` = :likable_id;');
    $query->bindParam(':user_id', $user_id);
    $query->bindParam(':likable_id', $post_id);
    $query->bindParam(':likeable_type', $type);
    return $query->execute()->fetchArray(SQLITE3_ASSOC);
}

function deleteLikeById($db, $id)
{
    $statement = $db->prepare('DELETE FROM `likes` WHERE `id` = :id;');
    $statement->bindParam(':id', $id);
    $statement->execute();
}

function createLike($db, $user_id, $post_id, $type)
{
    $statement = $db->prepare('INSERT INTO `likes` (`user_id`, `likeable_type`, `likable_id`)
    VALUES (:user_id, :likeable_type, :likable_id)');
    $statement->bindParam(
        ':user_id',
        $user_id
    );
    $statement->bindParam(
        ':likable_id',
        $post_id
    );
    $statement->bindParam(
        ':likeable_type',
        $type
    );
    $statement->execute();
}
