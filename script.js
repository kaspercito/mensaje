// Obtener el botón de guardar y el área de mensajes anteriores
const guardarBtn = document.getElementById('guardar-btn');
const mensajesPrevios = document.getElementById('mensajes-previos');

// Función para cargar los mensajes guardados
function cargarMensajes() {
    const mensajesGuardados = JSON.parse(localStorage.getItem('mensajes')) || [];

    // Mostrar los mensajes guardados
    mensajesGuardados.forEach(mensaje => {
        const nuevoMensaje = document.createElement('div');
        nuevoMensaje.classList.add('mensaje-anterior');
        nuevoMensaje.innerHTML = `
            <p><strong>${mensaje.fecha}:</strong> ${mensaje.texto}</p>
        `;
        mensajesPrevios.prepend(nuevoMensaje);
    });
}

// Función para guardar el mensaje
guardarBtn.addEventListener('click', () => {
    const mensajeTexto = document.getElementById('mensaje').innerText.trim(); // Usamos innerText para obtener el texto

    if (mensajeTexto !== '') {
        // Obtener la fecha actual
        const fechaActual = new Date();
        const fechaFormateada = (fechaActual.getDate().toString().padStart(2, '0')) + '/' +
                               (fechaActual.getMonth() + 1).toString().padStart(2, '0') + '/' +
                               fechaActual.getFullYear();

        // Crear el objeto del mensaje
        const mensaje = {
            fecha: fechaFormateada,
            texto: mensajeTexto
        };

        // Obtener los mensajes guardados actuales
        const mensajesGuardados = JSON.parse(localStorage.getItem('mensajes')) || [];

        // Agregar el nuevo mensaje a la lista
        mensajesGuardados.push(mensaje);

        // Guardar los mensajes actualizados en localStorage
        localStorage.setItem('mensajes', JSON.stringify(mensajesGuardados));

        // Crear el contenedor del mensaje en la página
        const nuevoMensaje = document.createElement('div');
        nuevoMensaje.classList.add('mensaje-anterior');
        nuevoMensaje.innerHTML = `
            <p><strong>${fechaFormateada}:</strong> ${mensajeTexto}</p>
        `;

        // Agregar el mensaje al contenedor de mensajes anteriores
        mensajesPrevios.prepend(nuevoMensaje);

        // Limpiar el área de texto editable
        document.getElementById('mensaje').innerText = '';
    }
});

// Cargar los mensajes al cargar la página
window.onload = cargarMensajes;
