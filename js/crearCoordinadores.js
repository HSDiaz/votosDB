$(document).ready(function() {
    $('#tipo_coordinador').change(function() {
        var tipoCoordinador = $(this).val();
        if (tipoCoordinador === 'deapie') {
            $('#contrasena').prop('required', false);
        } else {
            $('#contrasena').prop('required', true);
        }
    });
});

$(document).ready(function() {
    $('#coordinatorForm').submit(function(event) {

        // Obtener los valores del formulario
        var nombre = $('#nombre').val();
        var cedula = $('#cedula').val();
        var celular = $('#celular').val();
        var provincia = $('#provincia').val();
        var municipio = $('#municipio').val();
        var tipo_coordinador = $('#tipo_coordinador').val();
        var contrasena = $('#contrasena').val();
        var cantidad_votos = $('#cantidad_votos').val();

        // Aquí puedes enviar los datos del formulario a través de AJAX a tu archivo PHP para guardarlos en la base de datos
        // Si deseas realizar una operación asíncrona, puedes hacerla aquí

        // Mostrar mensaje de confirmación
        alert("Usuario creado correctamente");

        // Limpiar el formulario
        $('#coordinatorForm')[0].reset();
    });
});