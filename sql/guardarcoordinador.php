<?php

    // Incluir la conexión a la base de datos
    include '.\config\conx.php'; // Asegúrate de que el archivo de conexión esté correctamente configurado
// Verificar si se enviaron datos por el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Recoger los datos del formulario
    $nombre = $_POST['nombre'];
    $cedula = $_POST['cedula'];
    $celular = $_POST['celular'];
    $provincia = $_POST['provincia'];
    $municipio = $_POST['municipio'];
    $tipo_coordinador = $_POST['tipo_coordinador'];
    $contrasena = $_POST['contrasena'];
    $cantidad_votos = $_POST['cantidad_votos'];

    // Preparar la consulta SQL para insertar los datos
    $sql = "INSERT INTO coordinadores (nombre, cedula, celular, provincia, municipio, tipo_coordinador, contrasena, cantidad_votos) 
            VALUES ('$nombre', '$cedula', '$celular', '$provincia', '$municipio', '$tipo_coordinador', '$contrasena', '$cantidad_votos')";

    // Ejecutar la consulta y verificar si fue exitosa
    if ($conexion->query($sql) === TRUE) {
        echo "Los datos del coordinador se han guardado exitosamente.";
    } else {
        echo "Error al guardar los datos del coordinador: " . $conexion->error;
    }

    // Cerrar la conexión a la base de datos
    $conexion->close();
}
?>
