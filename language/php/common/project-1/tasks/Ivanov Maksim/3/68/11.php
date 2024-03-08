<?php
    function factor($num) {
        if ($num <= 1) {
            return $num;
        }
        return $num + factor($num - 1);
    }

    print(factor(6));