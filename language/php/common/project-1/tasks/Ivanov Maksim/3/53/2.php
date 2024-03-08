<?php
	$arr = [6, 2, 9, 5, 1, -1, 2, 4, 5];
	
    $res = 0;
	foreach ($arr as $elem) {
        if ($elem < 0) {
            break; // выйдем из цикла
		}
        $res += $elem;
	}

    print($res);