<?php
	$arr = [];
	$str = '';
	
	for ($i = 0; $i < 5; $i++) {
		$str .= 'x';
		$str .= 'x';
		$arr[] = $str;
	}

    var_dump($arr);