<?php
	$num = readline("a="); 
	if ($num < 10) {
        print('Number less 10');
    } elseif ($num > 99) {
        print('Number greater 99');
    } elseif ($num > 10 and $num < 99) {
        if (($num % 10 +  intdiv($num, 10)) <= 9) {
            print('Сумма чисел одноздначана');
        } else {
            print('Сумма чисел двузначна');
        }
    }