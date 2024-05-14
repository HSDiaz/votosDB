<?php
$servername = "127.0.0.1";
$username = "enmannuel";
$password = "s-e5C4haL4re3fR";
$database = "votos";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

echo "Conexión exitosa";

?>