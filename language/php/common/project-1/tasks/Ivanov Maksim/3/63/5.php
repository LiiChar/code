<?php
	$arr = [
		1 => 125,
		2 => 225,
		3 => 128,
		4 => 356,
		5 => 145,
		6 => 281,
		7 => 452,
	];
    $res = [];
    
    foreach ($arr as $key => $value) {
        if (floor($value / (10 ** (strlen($value) - 1))) == 2 or floor($value / (10 ** (strlen($value) - 1))) == 1) {
            $res[] = $value;
        }
    }

    var_dump($res);