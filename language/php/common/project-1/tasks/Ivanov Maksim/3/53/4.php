<?php
	$sum = 0;
    $res = 0;
	for ($i=1; $i < 100; $i++) { 
        if ($sum > 100) {
            break; 
		}
        $sum += $i;
        $res++;
    }

    print($res);