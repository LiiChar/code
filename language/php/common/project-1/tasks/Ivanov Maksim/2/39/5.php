<?php
        $num = readline("num = ");
        $piece1 = 0;
        $piece2 = 0;
    
        for ($i=0; $i < (strlen($num) / 2); $i++) { 
            $piece1 += $num[$i];
        }

        for ($i=(strlen($num) / 2); $i < strlen($num); $i++) { 
            $piece2 += $num[$i];
        }
    
        if ($piece1 === $piece2) {
            print("$piece1 = $piece2");
        }