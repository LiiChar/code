<?php
   $arr = range('a', 'z');
   shuffle($arr);
   var_dump(implode(array_slice($arr, 0, 6)));
?>