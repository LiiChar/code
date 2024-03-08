<?php
    $num = readline("num = ");
    $firstElem = intdiv($num, 10 ** ((strlen($num) - 1)) );

    if ($firstElem === 1 or $firstElem === 2 or $firstElem === 3) {
        print("$num начинается с $firstElem");
    }