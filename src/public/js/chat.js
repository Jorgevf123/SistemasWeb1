const socket = io();
const form = document.getElementById("comment-form");
const pageId = document.getElementById('pageId').value;
const chatInput = document.getElementById("comment-input");
const messagesDiv = document.getElementById("messages");
const chatContainer = document.getElementById("comment-section");
let usuario = document.getElementById("userId");
const imagen_perfil = document.getElementById("imagen_perfil").src;

socket.emit('joinPage', pageId);

socket.on('chat', (msg) => {
    const messageElement = createMessageElement(msg);
    messagesDiv.appendChild(messageElement);
});



function createMessageElement(msg) {    
    const messageElement = document.createElement('div');
    messageElement.classList.add('comment-content');
    
    // Imagen de perfil por defecto
    const img = document.createElement('img');
    img.src = imagen_perfil;
    img.classList.add('avatar');
    messageElement.appendChild(img);
    
    // Nombre del usuario y el mensaje
    const userText = document.createElement('strong');
    userText.textContent = `${msg.username}:`;
    messageElement.appendChild(userText);
    
    const messageText = document.createElement('span');
    messageText.textContent = msg.message;
    messageElement.appendChild(messageText);
    
    return messageElement;

}

// Escuchar el historial de mensajes cuando el cliente se conecta
socket.on('loadMessages', (messages) => {
    messages.forEach(msg => {
        const messageElement = createMessageElement(msg);
        messagesDiv.appendChild(messageElement);
    });
});
// Enviar un mensaje al servidor
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!usuario){
        usuario = "Invitado";
    }
    const message = chatInput.value.trim();
    if (message) {
        socket.emit('chat', {
            pageId: pageId,   // El ID de la página
            username: usuario.value || "Invitado",  // Esto lo puedes cambiar por el nombre real del usuario
            message: message
        });

        chatInput.value = '';  // Limpiar el campo de entrada
    }
});