<?php
 
    $now = date('Y-m-d', time());
     
    $date = date_create($now);
    date_modify($date, '-' . 100 . ' day');
    print date_format($date, 'Y-m-d');
?>