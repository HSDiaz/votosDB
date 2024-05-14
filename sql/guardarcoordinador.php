<?php
// Verificar si se recibieron los datos del formulario
if(isset($_POST['guardar'])) {
    // Incluir el archivo de conexión a la base de datos
    include 'conexion.php';
    
    // Recibir y sanitizar los datos del formulario
    $nombre = mysqli_real_escape_string($conn, $_POST['nombre']);
    $cedula = mysqli_real_escape_string($conn, $_POST['cedula']);
    $celular = mysqli_real_escape_string($conn, $_POST['celular']);
    $provincia = mysqli_real_escape_string($conn, $_POST['provincia']);
    $municipio = mysqli_real_escape_string($conn, $_POST['municipio']);
    $tipo_coordinador = mysqli_real_escape_string($conn, $_POST['tipo_coordinador']);
    $contrasena = mysqli_real_escape_string($conn, $_POST['contrasena']);
    $cantidad_votos = mysqli_real_escape_string($conn, $_POST['cantidad_votos']);
    
    // Consulta SQL para insertar los datos en la tabla coordinadores
    $sql = "INSERT INTO coordinadores (cedula, nombre, celular, provincia, municipio, cantidad_votos, tipo_coordinador, contrasena) 
            VALUES ('$cedula', '$nombre', '$celular', '$provincia', '$municipio', '$cantidad_votos', '$tipo_coordinador', '$contrasena')";

    // Ejecutar la consulta
    if($conn->query($sql) === TRUE) {
        echo "Registro creado satisfactoriamente.";
    } else {
        echo "Error al crear el registro: " . $conn->error;
    }

    // Cerrar la conexión
    $conn->close();
}
?>