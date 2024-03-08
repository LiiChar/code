<?php
    $arr = [0, 34, 6, 1, 4, 45, 11, -5 , -32];
    $len = count($arr);
    $sum = 0;

	for ($i = 0; $i < $len; $i++) {
        $sum += $arr[$i];
	}

    print($sum / $len);