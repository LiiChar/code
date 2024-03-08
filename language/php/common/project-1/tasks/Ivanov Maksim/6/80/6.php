<?php
	function func($num1 = 0, $num2 = 0) {
		echo $num1 + $num2;
	}
    func(2, 3); // 6
	func(3); // 3
	func(); // 0
?>