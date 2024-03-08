<?php
    $now = time();

    print(floor((mktime(20,20,20,12,31)-$now) / 60 / 60 /24));
?>