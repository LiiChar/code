<?php
	$num = readline("num = ");
	
	switch ($num) {
		case 1:
			echo 'Зима';
		break;
		case 2:
			echo 'Весна';
		break;
		case 3:
			echo 'Осень';
		break;
		case 4:
			echo 'Лето';
		break;
		default:
			echo 'Такой поры года не существует';
		break;
	}