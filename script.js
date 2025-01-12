document.getElementById("guardar-btn").addEventListener("click", function() {
    var mensaje = document.getElementById("mensaje").value;

    if (mensaje.trim() !== "") {
        var mensajesPrevios = document.getElementById("mensajes-previos");

        var nuevoMensaje = document.createElement("div");
        nuevoMensaje.classList.add("mensaje-anterior");
        nuevoMensaje.innerHTML = "<p>" + mensaje + "</p>";

        // Agregar la línea separadora
        var linea = document.createElement("div");
        linea.classList.add("mensaje-separador");

        mensajesPrevios.appendChild(nuevoMensaje);
        mensajesPrevios.appendChild(linea);

        // Limpiar el área de texto
        document.getElementById("mensaje").value = "";
    } else {
        alert("Por favor, escribe un mensaje antes de guardar.");
    }
});
