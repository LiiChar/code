<?php

    $datas = [
        '2019-12-29'=> ['name1', 'name2', 'name3', 'name4'],
        '2019-12-30'=> ['name5', 'name6', 'name7'],
        '2019-12-31'=> ['name8', 'name9'],
    ];

	$result = [];
	
	foreach ($datas as $key => $data) {
        foreach($data as $name) {
            $result[] = [
                'date' => $key,
                'event' => $name
            ];
        }
	}
	
	var_dump($result);
?>