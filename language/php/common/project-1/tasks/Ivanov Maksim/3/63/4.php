<?php
	$arr = [1 => 6, 2 => 7, 3 => 8, 4 => 9, 5 => 10];
    $indexSum = []; 
    $valueSum = []; 

    foreach ($arr as $i => $elem) {
        $indexSum[] = $i;
        $valueSum[] = $elem;
    }

    var_dump($valueSum);
    var_dump($indexSum);