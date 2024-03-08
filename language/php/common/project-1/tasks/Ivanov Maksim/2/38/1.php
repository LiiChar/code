<?php
	$min = readline("min="); 
	
	if ($min >= 0 and $min <= 20) {
		echo '1 четверть';
	}elseif ($min >= 20 and $min <= 40) {
		echo '2 четверть';
	}elseif ($min >= 40 and $min <= 60) {
		echo '3 четверть';
	}