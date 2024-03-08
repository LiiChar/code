
<?php

    $img = 'photoEnimal.png';
    $typeImg = '.png';
    if (substr($img, -strlen($typeImg)) === $typeImg) {
        print('Type image is - ' . $img);
    }
?>