<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Ola</title>

    <link rel="stylesheet" type="text/css" href="css/login.css">
</head>
<body>
<?php include 'config/conx.php'; ?>
	<div class="login-box">
		<h2>Iniciar Sesión</h2>
		<form id="loginForm">
			<div class="user-box">
				<input type="text" name="cedula" required="">
				<label>Cédula</label>
			</div>
			<div class="user-box">
				<input type="password" name="password" required="">
				<label>Contraseña</label>
			</div>
			<button type="submit">Iniciar Sesión</button>
		</form>
		<p id="error-message"></p>
	</div>

	<script src="js/login.js"></script>
</body>
</html>