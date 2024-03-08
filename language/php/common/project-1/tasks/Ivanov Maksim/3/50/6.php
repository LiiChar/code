    <?php
	$arr = ['понедельник', "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    $day = date( "N" );


	foreach ($arr as $i => $elem) {
		if ($i == $day - 1) {
			print('<i>' . $elem . '</i>');
		} else {
            print($elem);
        }
	}