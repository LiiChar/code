<?php
    $str = '<i>html</i>, <div></div> <b>php</b>, js';

    print_r(strip_tags($str, '<b><i>'));
