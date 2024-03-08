<?php
	$arr = [2, 4, 6, 9, 2, 3, 4, 5];
	$length = count($arr);
	
	for ($i = 2; $i < $length; $i++) {
		print($arr[$i - 2] + $arr[$i - 1] + $arr[$i] . ' -- ');
	}