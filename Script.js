const socket = new WebSocket('ws://localhost:8080');

const chatLog = document.getElementById('chat-log');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

socket.onmessage = (event) => {
  const message = event.data;
  chatLog.innerHTML += `<p>${message}</p>`;
};

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  socket.send(message);
  messageInput.value = '';
});