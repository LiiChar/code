<?php

    $countries = [
        [
            'country' => 'Россия',
            'city' =>    'Москва',
        ],
        [
            'country' => 'Беларусь',
            'city' =>    'Минск',
        ],
        [
            'country' => 'Россия',
            'city' =>    'Питер',
        ],
        [
            'country' => 'Россия',
            'city' =>    'Владивосток',
        ],
        [
            'country' => 'Украина',
            'city' =>    'Львов',
        ],
        [
            'country' => 'Беларусь',
            'city' =>    'Могилев',
        ],
        [
            'country' => 'Украина', 
            'city' =>    'Киев',
        ],
    ];

	$result = [];
	
	foreach ($countries as $country) {
		$result[$country['country']][] = $country['city'];
	}
	
	var_dump($result);
?>