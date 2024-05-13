// Objeto con la lista de provincias y sus municipios correspondientes
var provinciasYMunicipios = {
    "Azua": ["Azua de Compostela", "Las Charcas", "Estebanía", "Guayabal", "Padre Las Casas", "Peralta", "Sabana Yegua", "Tábara Arriba", "Pueblo Viejo"],
    "Bahoruco": ["Neiba", "Galván", "Los Ríos", "Tamayo", "Villa Jaragua"],
    "Barahona": ["Barahona", "Cabral", "El Peñón", "Enriquillo", "Fundación", "Jaquimeyes", "La Ciénaga", "Las Salinas", "Paraíso", "Polo"],
    "Dajabón": ["Dajabón", "Loma de Cabrera", "Partido", "Restauración"],
    "Distrito Nacional": ["Santo Domingo de Guzmán"],
    "Duarte": ["San Francisco de Macorís", "Arenoso", "Castillo", "Eugenio María de Hostos", "Las Guáranas", "Pimentel", "Villa Riva"],
    "Elías Piña": ["Comendador", "Bánica", "El Llano", "Hondo Valle"],
    "El Seibo": ["El Seibo", "Miches", "Pedro Sánchez", "San Francisco-Vicentillo"],
    "Espaillat": ["Moca", "Cayetano Germosén", "Gaspar Hernández", "Jamao al Norte"],
    "Hato Mayor": ["Hato Mayor del Rey", "El Valle", "Sabana de la Mar"],
    "Hermanas Mirabal": ["Salcedo", "Tenares", "Villa Tapia"],
    "Independencia": ["Jimaní", "Cristóbal"],
    "La Altagracia": ["Higüey", "Bávaro", "Miches"],
    "La Romana": ["La Romana", "Guaymate", "Villa Hermosa"],
    "La Vega": ["La Vega", "Constanza", "Jarabacoa", "Jima Abajo"],
    "María Trinidad Sánchez": ["Nagua", "Arenoso", "El Factor", "Las Terrenas", "Río San Juan"],
    "Monseñor Nouel": ["Bonao", "Maimón", "Piedra Blanca"],
    "Monte Cristi": ["Monte Cristi", "Castañuela", "Guayubín", "Las Matas de Santa Cruz", "Pepillo Salcedo", "Villa Vásquez"],
    "Monte Plata": ["Monte Plata", "Bayaguana", "Peralvillo", "Sabana Grande de Boyá", "Yamasá"],
    "Pedernales": ["Pedernales", "Oviedo"],
    "Peravia": ["Baní", "Nizao", "Sabana Buey", "Villa Fundación"],
    "Puerto Plata": ["San Felipe de Puerto Plata", "Altamira", "Guananico", "Imbert", "Los Hidalgos", "Luperón", "Sosúa", "Villa Isabela", "Villa Montellano"],
    "Samaná": ["Santa Bárbara de Samaná", "Las Galeras", "Los Tocones", "Sánchez"],
    "Sánchez Ramírez": ["Cotuí", "Cevicos", "Fantino", "La Mata"],
    "San Cristóbal": ["San Cristóbal", "Bajos de Haina", "Cambita Garabitos", "Los Cacaos", "Sabana Grande de Palenque", "San Gregorio de Nigua", "Villa Altagracia"],
    "San José de Ocoa": ["San José de Ocoa", "Sabana Larga"],
    "San Juan": ["San Juan de la Maguana", "Bohechío", "El Cercado", "Juan de Herrera", "Las Matas de Farfán", "Vallejuelo"],
    "San Pedro de Macorís": ["San Pedro de Macorís", "Consuelo", "Guayacanes", "Quisqueya", "Ramón Santana"],
    "Santiago": ["Santiago de los Caballeros", "Bisonó", "Jánico", "Licey al Medio", "Puñal", "Sabana Iglesia", "San José de las Matas", "Tamboril", "Villa González"],
    "Santiago Rodríguez": ["Santiago Rodríguez", "Monción", "San Ignacio de Sabaneta", "El Rubio"],
    "Santo Domingo": ["Santo Domingo Este", "Santo Domingo Norte", "Santo Domingo Oeste"],
    "Valverde": ["Mao", "Esperanza", "Laguna Salada", "Maizal", "Pepillo Salcedo"],
};


$(document).ready(function() {
    // Generar opciones de provincias
    $.each(provinciasYMunicipios, function(provincia) {
        $('#provincia').append($('<option>', {
            value: provincia,
            text: provincia
        }));
    });

    // Manejar cambio en la provincia seleccionada
    $('#provincia').change(function() {
        var provinciaSeleccionada = $(this).val();
        var municipios = provinciasYMunicipios[provinciaSeleccionada];
        $('#municipio').empty(); // Limpiar el selector de municipios
        $('#municipio').append($('<option>', {
            value: "",
            text: "Seleccione un municipio"
        }));
        $.each(municipios, function(index, municipio) {
            $('#municipio').append($('<option>', {
                value: municipio,
                text: municipio
            }));
        });
    });

    // Manejo del formulario de registro de coordinadores
    $('#coordinatorForm').submit(function(event) {
        event.preventDefault(); // Evita que se recargue la página al enviar el formulario

        // Obtener los valores del formulario
        var nombre = $('#nombre').val();
        var cedula = $('#cedula').val();
        var celular = $('#celular').val();
        var provincia = $('#provincia').val();
        var municipio = $('#municipio').val();

        // Guardar los datos en localStorage
        var coordinatorData = {
            nombre: nombre,
            cedula: cedula,
            celular: celular,
            provincia: provincia,
            municipio: municipio
        };
        // Verificar si hay datos previos en el localStorage
        var coordinators = JSON.parse(localStorage.getItem('coordinators')) || [];
        // Agregar el nuevo coordinador a la lista
        coordinators.push(coordinatorData);
        // Guardar la lista actualizada en el localStorage
        localStorage.setItem('coordinators', JSON.stringify(coordinators));

        // Limpiar el formulario
        $('#coordinatorForm')[0].reset();

        // Mostrar los coordinadores registrados
        mostrarCoordinadores();
    });

    // Mostrar los coordinadores registrados
    function mostrarCoordinadores() {
        // Obtener los datos de localStorage
        var coordinators = JSON.parse(localStorage.getItem('coordinators')) || [];
    
        // Limpiar la tabla antes de agregar los datos
        $('#coordinatorsTableBody').empty();
    
        // Iterar sobre los coordinadores y agregarlos a la tabla
        coordinators.forEach(function(coordinator) {
            // Crear la fila de la tabla con los datos del coordinador
            var row = '<tr>' +
                        '<td>' + coordinator.nombre + '</td>' +
                        '<td>' + coordinator.cedula + '</td>' +
                        '<td>' + coordinator.celular + '</td>' +
                        '<td>' + coordinator.provincia + '</td>' +
                        '<td>' + coordinator.numero + '</td>' +
                        '<td>' + coordinator.recinto + '</td>' +
                        '<td>' + coordinator.municipio + '</td>' +
                        '<td class="estado" data-voto="AunNoVoto">Aún no votó</td>' + // Agregar la columna de estado con valor por defecto
                        '<td>' +
                            '<button class="btn btn-danger delete">Eliminar</button>' +
                            '<button class="btn btn-success send">Enviar</button>' +
                        '</td>' +
                    '</tr>';
    
            // Agregar la fila a la tabla
            $('#coordinatorsTableBody').append(row);
        });
    
        // Manejar el evento de clic en el estado para cambiarlo
        $('.estado').click(function() {
            var estado = $(this).attr('data-voto');
            if (estado === "AunNoVoto") {
                $(this).attr('data-voto', 'Voto');
                $(this).text('Votó');
            } else {
                $(this).attr('data-voto', 'AunNoVoto');
                $(this).text('Aún no votó');
            }
        });

        // Manejar el evento de clic en el botón Eliminar
        $('.delete').click(function() {
            // Obtener el índice de la fila
            var index = $(this).closest('tr').index();
            // Obtener los coordinadores del localStorage
            var coordinators = JSON.parse(localStorage.getItem('coordinators'));
            // Eliminar el coordinador correspondiente al índice
            coordinators.splice(index, 1);
            // Guardar la lista actualizada en el localStorage
            localStorage.setItem('coordinators', JSON.stringify(coordinators));
            // Actualizar la tabla
            mostrarCoordinadores();
        });

        // Manejar el evento de clic en el botón Enviar
        $('.send').click(function() {
            // Aquí iría la consulta SQL para enviar los datos a la base de datos
            alert('Funcionalidad de enviar datos aún no implementada');
        });
    }

    // Mostrar los coordinadores al cargar la página
    mostrarCoordinadores();
});
