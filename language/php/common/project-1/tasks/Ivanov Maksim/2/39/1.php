<?php
    $month = readline("num month = ");

    if (($month === 12) or ($month >= 1 and $month <=2)) {
        print('Зима');
    } elseif ($month >= 3 and $month <=5) {
        print('Весна');
    } elseif ($month >= 6 and $month <=8) {
        print('Лето');
    } elseif ($month >= 9 and $month <=11) {
        print('Осень');
    }


