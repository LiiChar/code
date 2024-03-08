<?php
	$arr = [2, 5, -2, 9, 15, -7, 1, -20, 4];
	
    $res = 0;

	foreach ($arr as $elem) {
		if ($elem > 0) {
			$res += $elem;
		}
	}

    print($res);