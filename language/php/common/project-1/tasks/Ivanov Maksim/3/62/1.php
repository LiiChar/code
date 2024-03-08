<?php
	$arr = [3, 1, 6, 2, 8, 3, 5, 6];
	$length = count($arr);
	
	for ($i = 0; $i < $length; $i++) {
		$arr[$i] = $arr[$i] ** 2;
	}
	
	var_dump($arr); 