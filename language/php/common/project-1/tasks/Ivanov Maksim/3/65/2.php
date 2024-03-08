<?php
    $one = 1;
    $two = 2;
    $three = 3;

	for ($i = 1; $i <= 30; $i++) {
        $current = $one + $two + $three;
		
		$one = $two;
		$two = $three;
		$three = $current;
        
        print($current . ' -- ');
	}
