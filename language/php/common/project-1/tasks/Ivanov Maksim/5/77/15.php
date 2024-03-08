<?php
    $year = 2023;
    $friday_13  = [];
     
    $date = date_create( $year . '-01-13' );
     
    for ( $i=0; $i <= 11; $i++ ){
        if ( date_format($date, 'w') == 5 ){
            $friday_13[] = date_format($date, 'Y-m-d');
        }
        
        date_modify($date, '1 month');
    }
     
    print_r($friday_13);
?>