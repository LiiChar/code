<?php
    $res = [];
    for ($i=0; $i < 10; $i++) { 
        $res[] = mt_rand($i, $i + mt_rand(1, 120));
    }
    var_dump($res);
?>