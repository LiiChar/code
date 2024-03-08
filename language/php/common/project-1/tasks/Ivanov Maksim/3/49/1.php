<?php
	$arr = ['green' => 'зеленый', 'red' => 'красный','blue' => 'голубой'];
	
	foreach ($arr as $key => $elem) {
		print($key.'-'.$elem . '      ');
	}