<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Header</title>
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
    <header>
    <?php 
        include './config/conx.php';
    ?>
        <div class="container">
            <nav>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="crear_coordinador.php">Crear Coordinador</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="administrar_coordinadores.php">Administrar Coordinadores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="ver_votos_coordinadores.php">Ver Votos y Coordinadores de la Provincia</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</body>
</html>
