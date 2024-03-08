<?php
	$arr = [6, 2, 9, 2, 1, -1, 3, 4, 5];
	
    $res = 0;
	foreach ($arr as $i => $elem) {
        if ($elem === 3) {
            $res = $i;
            break;
		}
	}

    print($res);