<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php
    $arr = [
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5, 6, 7 ,8 ,9],
        [1, 2, 3, 4, 5],
    ];

    for ($i = 0; $i < count($arr); $i++) {
        for ($j = 0; $j < count($arr[$i]); $j++) {
            var_dump($num);
        }
    }

    foreach($arr as $key) {
        foreach ($key as $num) {
            var_dump($num);
        }
    }

    ?>

</body>

</html>