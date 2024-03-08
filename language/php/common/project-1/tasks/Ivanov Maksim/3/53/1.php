<?php
	$arr = [6, 2, 9, 5, 0, 6, 2, 4, 5];
	
	foreach ($arr as $elem) {
        print($elem);
		if ($elem === 0) {
			break; // выйдем из цикла
		}
	}