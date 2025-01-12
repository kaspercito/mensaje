// Obtener el botón de guardar y el área de mensajes anteriores
const guardarBtn = document.getElementById('guardar-btn');
const mensajesPrevios = document.getElementById('mensajes-previos');

// Función para guardar el mensaje y mostrarlo con la fecha actual
guardarBtn.addEventListener('click', () => {
    const mensajeTexto = document.getElementById('mensaje').value;
    
    if (mensajeTexto.trim() !== '') {
        // Obtener la fecha actual
        const fechaActual = new Date();
        const fechaFormateada = fechaActual.toLocaleDateString('es-ES', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        // Crear el contenedor del mensaje
        const nuevoMensaje = document.createElement('div');
        nuevoMensaje.classList.add('mensaje-anterior');

        // Mostrar el mensaje con la fecha
        nuevoMensaje.innerHTML = `
            <p><strong>Fecha:</strong> ${fechaFormateada}</p>
            <p><strong>Mensaje:</strong> ${mensajeTexto}</p>
            <hr>
        `;

        // Agregar el mensaje al contenedor de mensajes anteriores
        mensajesPrevios.prepend(nuevoMensaje);  // Añadir al principio para que el mensaje más reciente esté arriba

        // Limpiar el campo de texto
        document.getElementById('mensaje').value = '';
    }
});
