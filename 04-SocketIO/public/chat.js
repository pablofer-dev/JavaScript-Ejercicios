const socket = io()
let output = document.getElementById('output')
let message = document.getElementById('message')
let actions = document.getElementById('actions')
let username = document.getElementById('username')
let btn = document.getElementById('send')
btn.addEventListener('click', () => {
    let user = {
        username: username.value,
        message: message.value
    };
    socket.emit('chat:message', user)
})

socket.on('chat:message', (data) => {
    output.innerHTML += `<p><strong>${data.username}</strong>: ${data.message}</p>`
})

message.addEventListener('keypress', () => {
    socket.emit('chat:typing', username.value)
})
socket.on('chat:typing', (data) => {
    actions.innerHTML = `<p>${data} is typing...</p>`
})

