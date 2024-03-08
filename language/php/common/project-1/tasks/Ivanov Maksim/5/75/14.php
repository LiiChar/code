
<?php

    $img = 'photoEnimal.jpg';
    $typePng = '.png';
    $typeJpg = '.jpg';
    if (substr($img, -strlen($typePng)) === $typePng || substr($img, -strlen($typeJpg)) === $typeJpg) {
        print('Type image is - ' . $img);
    }
?>