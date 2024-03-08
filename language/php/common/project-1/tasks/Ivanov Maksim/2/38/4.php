<?php
	$x1 = readline("x1="); 
    $del = readline("del="); 
	
	if ($x1 % $del === 0) {
		print("$x1 делиться на $del");
	} else {
		print("$x1 не делиться на $del");
	}