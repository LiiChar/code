<?php
	$arr = [1 => 6, 2 => 7, 3 => 8, 4 => 9, 5 => 10];
    $indexSum = 0; 
    $valueSum = 0; 

    foreach ($arr as $i => $elem) {
        $indexSum += $i;
        $valueSum += $elem;
    }

    print($indexSum / $valueSum);