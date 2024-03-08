<?php
    $arr = [0, 34, 6, 1, 5, 45, 11, -5 , -32];
    $len = count($arr);

	for ($i = 0; $i < $len; $i++) {
        if ($arr[$i] > 0 && $arr[$i] < 10) {
            print($arr[$i]);
        }
	}