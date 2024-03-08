<?php
	$products = [
		[
			'name'   => 'мясо',
			'price'  => 100,
			'amount' => 5,
		],
		[
			'name'   => 'овощи',
			'price'  => 200,
			'amount' => 6,
		],
		[
			'name'   => 'фрукты',
			'price'  => 300,
			'amount' => 7,
		],
	];

	$products[] = [
		'name'   => 'молочные изделия',
		'price'    => 50,
		'amount' => 10,
	];

	foreach ($products as $product) {
		print($product['name'] . ' в наличии ' . $product['amount'] . ' штук, цена за 1 штуку - ' . $product['price'] . '$. Цена за весь имеющийстя продукт ' . $product['amount'] * $product['price'] . '$<br>');
	}
?> 