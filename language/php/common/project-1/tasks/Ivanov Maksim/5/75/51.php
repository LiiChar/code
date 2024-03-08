<?php
    $str = mt_rand(0,1) ? chr(mt_rand(97, 122)) : chr(mt_rand(65, 90));
    if (strtolower($str) === $str) {
        print('Маленькая буква');
    } else {
        print('Большая буква');
    }