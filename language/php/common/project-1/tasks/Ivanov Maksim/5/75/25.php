<?php
    $str = 'aaa.aaa aaa aaa.aaa';
    if (strpos($str, '.') && $str[strpos($str, '.') + 1] === '.') {
        print("Строка содержит две точки подряд");
    } else {
        print("Строка не содержит две точки");
    }