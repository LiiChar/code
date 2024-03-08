<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title> 
</head>
<body>
    <?php 
    session_start();
    // обрабка ошибок
    if ($_SESSION['error']) {?>
       <div style="color: red"><?php print($_SESSION['error']);?></div>
       <?php }?>
       <?php //форма для ищменения поста ?>
    <form action="../action/changeUser.php" method="post">
        <div>
            <div>Имя</div>
            <input type="text" name='firstname'>
        </div>
        <div>
            <div>Фамилия</div>
            <input type="text" name='lastname'>
        </div>
        <div>
            <div>Логин</div>
            <input type="text" name='username'>
        </div>
        <div>
            <div>Пароль</div>
            <input type="text" name='password'>
        </div>
        <div>Биография</div>
        <textarea name="bio"></textarea>
        <input type="submit" value="Изменить"/>
    </form>
</body>
</html>