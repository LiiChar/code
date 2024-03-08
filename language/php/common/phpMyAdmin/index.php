$host = 'localhost';
$port = 3306;
$dbname = 'aida64';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
try {
    $db = new mysqli($host, $user, $pass, $dbname, $port);
    $db->set_charset($charset);
    $db->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, 1);
} catch (\mysqli_sql_exception $e) {
     throw new \mysqli_sql_exception($e->getMessage(), $e->getCode());
}
unset($host, $dbname, $user, $pass, $charset, $port); // we don't need them anymore