<?php
    $str = ' http://code.mu/ru/php/book/prime/inbuilt/string/';
    if (strpos($str, 'http://')) {
        print("Строка содержит две точки подряд");
    } else {
        print("Строка не содержит две точки");
    }