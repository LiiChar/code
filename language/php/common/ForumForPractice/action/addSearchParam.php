<?php

if ($_GET['search']) {
    if ($pos = strpos($_SERVER['HTTP_REFERER'], "http://localhost:3000/forum/index.php")) {
        $url_parts = parse_url($_SERVER['HTTP_REFERER']);
        $params;
        // If URL doesn't have a query string.
        if (isset($url_parts['query'])) { // Avoid 'Undefined index: query'
            parse_str($url_parts['query'], $params);
        } else {
            $params = array();
        }

        $params['search'] = $_GET['search'];

        $url_parts['query'] = http_build_query($params);

        $url = $url_parts['scheme'] . "://" . $url_parts["host"] . ":" . $url_parts["port"] . $url_parts["path"] . "?" . $url_parts["query"];

        header('Location: ' . $url);
    } else {
        header('Location: http://localhost:3000/forum/index.php?search=' . $_GET['search']);
    }
} else {
    $url_parts = parse_url($_SERVER['HTTP_REFERER']);
    $params;
    // If URL doesn't have a query string.
    if (isset($url_parts['query'])) { // Avoid 'Undefined index: query'
        parse_str($url_parts['query'], $params);
    } else {
        $params = array();
    }

    $params['search'] = "";

    $url_parts['query'] = http_build_query($params);

    $url = $url_parts['scheme'] . "://" . $url_parts["host"] . ":" . $url_parts["port"] . $url_parts["path"] . "?" . $url_parts["query"];
    header('Location: ' . $url);
}
