<?php
    $str1 = '1a2b3bvbasqccbbc4bawerqweaw5d6e7awerfwaf8g9h0';
    $str2 = strtr($str1, 'abc', '123');
    $str2 = strtr($str1, ['a' => 1, 'b' => 2, 'c' => 3]);
    print($str2);
?>