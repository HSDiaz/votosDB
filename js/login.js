const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const cedula = loginForm.cedula.value;
	const password = loginForm.password.value;

	// TO DO: implement login logic here
	// For demonstration purposes, we'll just check if the username and password are not empty
	if (cedula && password) {
		alert(`Bienvenido, ${cedula}!`);
	} else {
		errorMessage.textContent = 'Usuario o contraseña incorrecta';
	}
});

// Haz que cuando se valide el acceso, te dirija automaticamente a SeleccionArea.html