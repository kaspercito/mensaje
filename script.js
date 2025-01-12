// Mostrar la fecha en que nos conocimos
const fechaConocidos = "16 de septiembre de 2023";
document.getElementById("fecha-conocidos").textContent = fechaConocidos;

// Función para guardar el mensaje
function guardarMensaje() {
    const mensaje = document.getElementById("mensaje").value;
    if (mensaje.trim() !== "") {
        // Guardar el mensaje en el almacenamiento local
        localStorage.setItem("mensajeDia", mensaje);
        mostrarMensaje(); // Mostrar el mensaje guardado
    } else {
        alert("Por favor, escribe un mensaje antes de guardar.");
    }
}

// Función para mostrar el mensaje guardado
function mostrarMensaje() {
    const mensajeGuardado = localStorage.getItem("mensajeDia");
    if (mensajeGuardado) {
        document.getElementById("mensaje-dia").textContent = mensajeGuardado;
    } else {
        document.getElementById("mensaje-dia").textContent = "Aún no has escrito un mensaje.";
    }
}

// Mostrar el mensaje guardado al cargar la página
window.onload = mostrarMensaje;
