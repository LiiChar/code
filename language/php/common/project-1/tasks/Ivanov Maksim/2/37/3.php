<?php
	$day = readline("a="); 
	if ($day < 1) {
        print('Error: Month must begin is 1');
    } elseif ($day > 31) {
        print('Error: Month must end is 31');
    } elseif ($day < 10) {
		echo '1 декада месяца';
	} elseif($day > 10 and $day < 20) {
		echo '2 декада месяца';
	} elseif ($day > 20) {
		echo '3 декада месяца';
	}