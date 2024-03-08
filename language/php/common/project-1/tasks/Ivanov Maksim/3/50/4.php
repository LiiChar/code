<?php
	$arr = [10, 20, 30, 50, 235, 3000];

	foreach ($arr as $elem) {
        $el = intdiv($elem,10 ** (int)((strlen((string)$elem)) - 1));
		if ($el == 1 || $el == 2 || $el == 5) {
			print($elem);
		}
	}