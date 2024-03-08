<?php
	$arr = [1, 2, 3, 4, 5];
	$length = count($arr);
	
	for ($i = 0; $i < $length; $i++) {
		print($arr[$i + 1]);
	}