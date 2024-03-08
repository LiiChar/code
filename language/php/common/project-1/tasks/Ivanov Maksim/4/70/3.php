<?php
	$arr = [
		[
			'name'   => 'user1',
			'age'    => 30,
			'salary' => 1000,
		],
		[
			'name'   => 'user2',
			'age'    => 31,
			'salary' => 2000,
		],
		[
			'name'   => 'user3',
			'age'    => 32,
			'salary' => 3000,
		],
	];

    foreach ($arr as $key1 => $value1) {
        foreach ($value1 as $key2 => $value2) {
            print($key2 . ' => ' . $value2) . ' / ';
        }
    }