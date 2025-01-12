// Obtener los elementos del DOM
const mensajeInput = document.getElementById("mensaje");
const guardarBtn = document.getElementById("guardar-btn");
const mensajesPrevios = document.getElementById("mensajes-previos");

// Recuperar los mensajes anteriores del almacenamiento local
const mensajesGuardados = JSON.parse(localStorage.getItem("mensajes")) || [];

// Mostrar los mensajes anteriores en la página
function mostrarMensajes() {
    mensajesPrevios.innerHTML = "";
    mensajesGuardados.forEach((mensaje, index) => {
        const mensajeElemento = document.createElement("div");
        mensajeElemento.classList.add("mensaje-previo");
        mensajeElemento.innerHTML = `
            <p><strong>Mensaje ${index + 1}:</strong> ${mensaje}</p>
        `;
        mensajesPrevios.appendChild(mensajeElemento);
    });
}

// Función para guardar el mensaje
function guardarMensaje() {
    const mensaje = mensajeInput.value.trim();
    if (mensaje !== "") {
        mensajesGuardados.push(mensaje);
        localStorage.setItem("mensajes", JSON.stringify(mensajesGuardados));
        mensajeInput.value = ""; // Limpiar el campo de texto
        mostrarMensajes(); // Actualizar los mensajes anteriores
    }
}

// Mostrar los mensajes al cargar la página
mostrarMensajes();

// Agregar el evento de guardar al botón
guardarBtn.addEventListener("click", guardarMensaje);
