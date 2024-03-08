<?php
    $date = date_create('2025-12-31');
    date_modify($date, '2 day 1 month');
    date_modify($date, '3 day');
    date_modify($date, '1 year');
    date_modify($date, '-3 day');
    print(date_format($date, 'd.m.Y'));
?>