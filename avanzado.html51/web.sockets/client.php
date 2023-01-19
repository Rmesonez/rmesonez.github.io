<?php
$i = 0;
$host = '127.0.0.1';
$port = '25003';

while($i < 1){
    message = ' ';
    $socket = socket_create(AF_INET, SOCK_STREAM, 0) or die('No se puede crear socket');
    $result = socket_connect($socket, $host, $port) or die('No se puede conectar al servidor');
    socket_write($socket, $message, strlen($message)) or die('No se puede enviar datos');

    $result = socket_read($socket, 1024) or die('No hay respuesta del servidor');
    echo $result . '\n';
    socket_close($socket);
    $i++;
}
?>