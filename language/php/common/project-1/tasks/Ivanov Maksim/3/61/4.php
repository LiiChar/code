<?php
	$arr = [1, 2, 3, 4, 5, 6, 7, 8];
	$sum = 0;
    $length = count($arr);
	
	for ($i = 1; $i < $length; $i++) {
		$sum += $arr[$i];
	}
	
	print($sum);