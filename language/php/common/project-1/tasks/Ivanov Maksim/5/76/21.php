<?php
	$arr = ['a', '-', 'b', '-', 'c', '-', 'd'];
    array_splice($arr, array_search('-', $arr), 1);
    print_r($arr);
?>