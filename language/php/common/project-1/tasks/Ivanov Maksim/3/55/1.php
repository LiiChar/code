<?php
	$arr = ['a', 'b', 'c', 'd', 'e'];
    $flag = false;

    foreach ($arr as $elem) {
        if ($elem === 'c') {
            $flag = true;
        }
    }

    if ($flag) {
        print('да');
    } else {
        print('нет');
    }