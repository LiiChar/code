<?php
    $query = shell_exec("powershell.exe get-systeminfo -hdd localhost");
    parse_str($query, $result); 
    var_dump($result);