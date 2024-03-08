<?php
    $str1 = '1a2b3c4b5d6e7f8g9h0';
    for ($i=0; $i < 11; $i++) { 
        $str1 = str_replace($i, '',$str1);
    }
    print($str1);
?>