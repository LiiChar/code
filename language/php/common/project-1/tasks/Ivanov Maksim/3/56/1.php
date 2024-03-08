<?php
    $num = 7;
    $flag = true;

    for ($i=1; $i < $num; $i++) { 
        if ($num % $i === 0) {
            $flag = false;
            break;
        }
    }

    if ($flag) {
        print($num . ' не простое');
    } else {
        print($num . ' простое');
    } 

