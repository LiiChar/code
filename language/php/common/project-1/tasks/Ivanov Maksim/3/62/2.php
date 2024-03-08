<?php
	$arr = [3, 1, 6, 2, 8, 3, 5, 6, 1];
	$length = count($arr);
	
	for ($i = 0; $i < $length; $i++) {
		$arr[$i]--;
	}
	
	var_dump($arr); 