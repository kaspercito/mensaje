// Función para guardar el mensaje
function guardarMensaje() {
    const mensaje = document.getElementById("mensaje").value;
    if (mensaje.trim() !== "") {
        // Guardar el mensaje en el almacenamiento local
        const mensajesGuardados = JSON.parse(localStorage.getItem("mensajes") || "[]");
        mensajesGuardados.push(mensaje);
        localStorage.setItem("mensajes", JSON.stringify(mensajesGuardados));
        mostrarMensajes(); // Mostrar los mensajes guardados
        document.getElementById("mensaje").value = ""; // Limpiar el cuadro de texto
    } else {
        alert("Por favor, escribe un mensaje antes de guardar.");
    }
}

// Función para mostrar los mensajes guardados
function mostrarMensajes() {
    const mensajesGuardados = JSON.parse(localStorage.getItem("mensajes") || "[]");
    const mensajesDiv = document.getElementById("mensajes-previos");
    mensajesDiv.innerHTML = ""; // Limpiar mensajes previos

    if (mensajesGuardados.length > 0) {
        mensajesGuardados.forEach((mensaje, index) => {
            const mensajeDiv = document.createElement("div");
            mensajeDiv.classList.add("mensaje-previo");
            mensajeDiv.innerHTML = `<strong>Mensaje ${index + 1}:</strong> <p>${mensaje}</p>`;
            mensajesDiv.appendChild(mensajeDiv);
        });
    } else {
        mensajesDiv.innerHTML = "<p>No tienes mensajes guardados aún.</p>";
    }
}

// Mostrar los mensajes al cargar la página
window.onload = mostrarMensajes;

// Asignar el evento de clic al botón de guardar
document.getElementById("guardar-btn").addEventListener("click", guardarMensaje);
