
<?php

    $url = 'http://localhost:5000';
    $publicProtocol = 'http://';
    $protectProtocol = 'https://';
    if (substr($url, 0, strlen($publicProtocol)) === $publicProtocol || substr($url, 0, strlen($protectProtocol)) === $protectProtocol) {
        print('this url start is: ' . $url);
    }
?>