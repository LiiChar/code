
<?php
    $url = "http://";
    if (substr('http://localhost:5000', 0, strlen($url)) === $url) {
        print('this url start is: ' . $url);
    }
?>