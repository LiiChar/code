<?php
    $num = readline("num = ");
    $res = 0;

    for ($i=0; $i < strlen($num); $i++) { 
        $res += $num[$i];
    }

    print($res);