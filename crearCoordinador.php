<?php
// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Incluir el archivo de conexión a la base de datos
    include 'config/conx.php';

    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $cedula = $_POST['cedula'];
    $celular = $_POST['celular'];
    $provincia = $_POST['provincia'];
    $municipio = $_POST['municipio'];
    $tipo_coordinador = $_POST['tipo_coordinador'];
    $contrasena = $_POST['contrasena'];
    $cantidad_votos = $_POST['cantidad_votos'];

    // Query para insertar los datos en la tabla coordinadores
    $sql = "INSERT INTO coordinadores (nombre, cedula, celular, provincia, municipio, tipo_coordinador, contrasena, cantidad_votos) 
            VALUES ('$nombre', '$cedula', '$celular', '$provincia', '$municipio', '$tipo_coordinador', '$contrasena', $cantidad_votos)";

    // Ejecutar la consulta
    if (mysqli_query($conn, $sql)) {
        echo "Coordinador creado exitosamente.";
    } else {
        echo "Error al crear el coordinador: " . mysqli_error($conn);
    }

    // Cerrar la conexión a la base de datos
    mysqli_close($conn);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crear Coordinadores</title>
    <!-- Enlace al archivo CSS de Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        /* Estilos adicionales */
        header {
            background-color: #007bff; /* Color de fondo azul */
            padding: 10px 0; /* Espaciado interno */
        }
        nav ul li {
            display: inline; /* Para que los botones aparezcan en línea */
            margin-right: 20px; /* Espacio entre botones */
        }
        nav ul li a {
            color: #fff; /* Color de texto blanco */
        }
    </style>
</head>
<body>
    <?php 
    
    include 'layout/header.php';
    include 'sql/guardarcoordinador.php';
    
    ?>

    <div class="container">
        <h2>Crear Coordinador</h2>
        <form id="coordinatorForm" action="sql/guardarcoordinador.php" method="POST">
            <div class="form-group">
                <label for="nombre">Nombre del Coordinador:</label>
                <input type="text" class="form-control" id="nombre" name="nombre" required>
            </div>
            <div class="form-group">
                <label for="cedula">Cédula:</label>
                <input type="text" class="form-control" id="cedula" name="cedula" required>
            </div>
            <div class="form-group">
                <label for="celular">Celular:</label>
                <input type="text" class="form-control" id="celular" name="celular" required>
            </div>
            <div class="form-group">
                <label for="provincia">Provincia:</label>
                <select class="form-control" id="provincia" name="provincia" required>
                    <option value="">Seleccione una provincia</option>
                    <!-- Opciones de provincias se generan dinámicamente -->
                </select>
            </div>
            <div class="form-group">
                <label for="municipio">Municipio:</label>
                <select class="form-control" id="municipio" name="municipio" required>
                    <option value="">Seleccione un municipio</option>
                    <!-- Opciones de municipios se generan dinámicamente -->
                </select>
            </div>
            <div class="form-group">
                <label for="tipo_coordinador">Tipo de Coordinador:</label>
                <select class="form-control" id="tipo_coordinador" name="tipo_coordinador" required>
                    <option value="nacional">Nacional</option>
                    <option value="provincial">Provincial</option>
                    <option value="deapie">De a Pie</option>
                </select>
            </div>
            <div class="form-group">
                <label for="contrasena">Contraseña:</label>
                <input type="password" class="form-control" id="contrasena" name="contrasena">
            </div>
            <div class="form-group">
                <label for="cantidad_votos">Cantidad de Personas Previstas a Votar:</label>
                <input type="number" class="form-control" id="cantidad_votos" name="cantidad_votos" required>
            </div>
            <button type="submit" class="btn btn-primary" name="guardar">Guardar</button>
        </form>
        <a href="login.php">
            <button class="btn btn-danger">Regresar</button>
        </a>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="js/coordinadores.js"></script>
    <script src="js/crearCoordinadores.js"></script>
</body>
</html>