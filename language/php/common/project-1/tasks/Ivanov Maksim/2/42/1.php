<?php
	$user = ['name' => 'john', 'age' => 30];
	
    $name = $user['name'] ?? 'unknown';

    print($name);