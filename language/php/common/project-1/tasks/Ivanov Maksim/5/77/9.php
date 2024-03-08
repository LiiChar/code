<?php
    $week = ['sn', 'mn', 'tu', 'wd', 'th', 'fr', 'st'];
    print $week[date('w', time())] . '<br>';
    print $week[date('w', mktime(0, 0, 0, 6, 6, 2006))] . '<br>';
    print $week[date('w', mktime(0, 0, 0, 5, 5, 2004))];
?>