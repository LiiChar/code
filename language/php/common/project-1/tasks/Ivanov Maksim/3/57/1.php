<?php
	$num = rand(1, 20);

    $res = 0;
	
	while ($num < 1000) {
		$num = $num * 3;
        $res++;
	}
	
	print($res);