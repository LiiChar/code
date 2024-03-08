<?php
	$arr = [
		'employee1' => 100,
		'employee2' => 200,
		'employee3' => 300,
		'employee4' => 400,
		'employee5' => 500,
		'employee6' => 600,
		'employee7' => 700,
	];
    $len = count($arr);

    for ($i=1; $i <= $len; $i++) { 
        if ($arr['employee' . $i] <= 400) {
            $arr['employee' . $i] += ($arr['employee' . $i] / 100) * 10;
        }
    }

    var_dump($arr);