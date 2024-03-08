<?php
    $len = mt_rand(1, 20);
    $str = '';
    for ($i=1; $i <= $len; $i++) { 
       $str .= chr(mt_rand(97, 122));
    }
    print($str);