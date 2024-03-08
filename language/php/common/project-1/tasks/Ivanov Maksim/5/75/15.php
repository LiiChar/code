<?php
    $str = 'Если в этой строке более 5-ти символов';
    if (strlen($str) > 5) {
        print(substr($str, 0, 9));
    } else {
        print($str);
    }
?>