<?php
	$one = 0;
	$two = 1;
	
	for ($i = 0; $i < 10; $i++) {
		$current = $one + $two;
		
		$one = $two;
		$two = $current;
		
        print($current . ' -- ');
	}

