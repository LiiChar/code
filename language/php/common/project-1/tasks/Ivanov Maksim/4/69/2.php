<?php
	$arr = [[1, 2], [3, 4], [5, 6]];
    $sum = 0;

    for ($i=0; $i < count($arr); $i++) { 
         for ($j=0; $j < count($arr[0]); $j++) {
            $sum += $arr[$i][$j];
        }
    }

    print($sum);