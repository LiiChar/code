<?php
	$arr = [];
	
	for ($i = 1; $i < 10; $i++) {
		$str = '';
		
		for ($j = 0; $j < 5; $j++) {
			$str .= $i;
		}
		
		$arr[] = $str;
	}
	
	var_dump($arr);