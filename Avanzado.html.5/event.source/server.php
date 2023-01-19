<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = date('r');//hora del servidor
echo "event: evento\n";
echo "data: The server time is: {$time}\n\n";
flush();
?>
