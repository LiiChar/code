<?php
    $arr = [0, 34, 6, 1, 4, 45, 11, -5 , -32];
    $len = count($arr);
    $flag = false;

	for ($i = 0; $i < $len; $i++) {
        if ($arr[$i] === 5) {
            $flag = true;
        }
	}

    var_dump($flag);