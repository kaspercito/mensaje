// Obtener el botón de guardar y el área de mensajes anteriores
const guardarBtn = document.getElementById('guardar-btn');
const mensajesPrevios = document.getElementById('mensajes-previos');

// Función para guardar el mensaje y mostrarlo con la fecha actual
guardarBtn.addEventListener('click', () => {
    const mensajeTexto = document.getElementById('mensaje').value;
    
    if (mensajeTexto.trim() !== '') {
        // Obtener la fecha actual
        const fechaActual = new Date();
        const fechaFormateada = (fechaActual.getDate().toString().padStart(2, '0')) + '/' +
                               (fechaActual.getMonth() + 1).toString().padStart(2, '0') + '/' +
                               fechaActual.getFullYear();

        // Crear el contenedor del mensaje
        const nuevoMensaje = document.createElement('div');
        nuevoMensaje.classList.add('mensaje-anterior');

        // Mostrar el mensaje con la fecha en formato 12/1/2025: Hola
        nuevoMensaje.innerHTML = `
            <p><strong>${fechaFormateada}:</strong> ${mensajeTexto}</p>
        `;

        // Agregar el mensaje al contenedor de mensajes anteriores
        mensajesPrevios.prepend(nuevoMensaje);  // Añadir al principio para que el mensaje más reciente esté arriba

        // Limpiar el campo de texto
        document.getElementById('mensaje').value = '';
    }
});
