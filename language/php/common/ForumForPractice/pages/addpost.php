<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/style.css">
    <title>Добавление поста</title>
</head>

<body>
    <div class="wrapper_addPost">

        <form class="add_post" action="../action/addPost.php" method="post" enctype="multipart/form-data">
            <?php //форма для добавления поста 
            ?>
            <label for="heading">Введите заголовок</label>
            <input id="heading" type="text" name="heading">
            <label for="body">Введите текст</label>
            <textarea id="body" type="text" name="body"></textarea>
            <label for="file">Выберите файл(необязательно)</label>
            <input id="file" type="file" name="userfile">
            <button type="submit">Создать</button>
            <?php
            session_start();
            print_r("<div class=error>" . $_SESSION['error'] . "</div>");
            ?>
        </form>
    </div>

</body>

</html>