function toggleChat() {
    var panelChat = document.getElementById("panel-chat");
    if (panelChat.style.display === "none") {
        panelChat.style.display = "block";
    } else {
        panelChat.style.display = "none";
    }
}
// Obtener referencia a la base de datos de Firebase
var database = firebase.database();
var mensajesRef = database.ref('mensajes');

// Función para enviar un mensaje
function enviarMensaje(usuario, contenido) {
    mensajesRef.push({
        usuario: usuario,
        contenido: contenido
    });
}

// Escuchar eventos de nuevos mensajes y mostrarlos en el área de mensajes
mensajesRef.on('child_added', function(snapshot) {
    var mensaje = snapshot.val();
    var areaMensajes = document.getElementById('area-mensajes');
    var nuevoMensaje = document.createElement('div');
    nuevoMensaje.innerHTML = '<strong>' + mensaje.usuario + ':</strong> ' + mensaje.contenido;
    areaMensajes.appendChild(nuevoMensaje);
});
