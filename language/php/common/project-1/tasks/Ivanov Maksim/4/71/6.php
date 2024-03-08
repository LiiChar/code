<?php
	$arr = [];
	
	for ($i = 0, $z = 1; $i < 1; $i++) {
		for ($j = 0; $j < 4; $j++) {
            for ($k=0; $k < 2; $k++) { 
                $arr[$i][$j][$k] = $z++;
            }
		}
	}
	
	var_dump($arr);
?>