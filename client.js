document.addEventListener('DOMContentLoaded', function() {
    const socket = new WebSocket('ws://localhost:3000');

    const chatOutput = document.getElementById('chat-output');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    socket.onmessage = function(event) {
        const message = event.data;
        appendMessage(message);
    };

    sendButton.addEventListener('click', function() {
        const message = messageInput.value;
        if (message.trim() !== '') {
            socket.send(message);
            messageInput.value = '';
        }
    });

    function appendMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.innerText = message;
        chatOutput.appendChild(messageElement);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }
});
