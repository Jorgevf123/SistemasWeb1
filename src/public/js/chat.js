const socket = io();
const form = document.getElementById("comment-form");
const input = document.getElementById("comment-input");
const messages = document.getElementById("messages");
const chatContainer = document.getElementById("comment-section");
const username = "Calos ramos";

socket.on("loadMessages", (previousMessages) => {
    previousMessages.forEach((msg) => {
        displayMessage(msg);
    });
});

form.addEventListener('submit', function(e){
    e.preventDefault();
    const messageText = input.value.trim();

    if (messageText) {
        const mentionedUser = extractMentionedUser(messageText);

        socket.emit("chat", { message: messageText, username: username, mentionedUser: mentionedUser });
        input.value = "";
    }
});

socket.on("chat", (data) => {
    displayMessage(data);
    chatContainer.scrollTop = chatContainer.scrollHeight;
});

function displayMessage(data) {
    const item = document.createElement("li");
    const userEmail = data.mentionedUser || data.username;
    const displayedUsername = userEmail.split('@')[0];

    item.textContent = `${displayedUsername}: ${data.message}`;

    if (data.username === username) {
        item.classList.add("current-user-message");
    } else {
        item.classList.add("other-user-message");
    }

    messages.appendChild(item);
}

function extractMentionedUser(messageText) {

    const mentionedUser = messageText.split('@')[0].trim();

    return mentionedUser !== messageText ? mentionedUser : null;
}
