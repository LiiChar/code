<?php
	$arr = [
		[
			[1, 2],
			[3, 4],
		],
		[
			[5, 6],
			[7, 8],
		],
	];
    $sum = 0;

    for ($i=0; $i < count($arr); $i++) { 
         for ($j=0; $j < count($arr[$i]); $j++) {
            for ($k=0; $k < count($arr[$i][$j]); $k++) { 
                $sum += $arr[$i][$j][$k];
            }
        }
    }

    print($sum);