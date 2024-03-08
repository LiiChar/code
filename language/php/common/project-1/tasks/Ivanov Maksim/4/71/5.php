<?php
	$arr = [];
	
	for ($i = 0, $k = 0; $i < 4; $i++) {
		for ($j = 0; $j < 3; $j++) {
			$arr[$i][$j] = $k += 2 ;
		}
	}
	
	var_dump($arr);
?>