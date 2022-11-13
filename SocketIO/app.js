const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
app = express();
//static files
app.use(express.static(path.join(__dirname, 'public')));
//settings
app.set('port', process.env.PORT || 3000)
//start server
const server = app.listen(app.get('port'), () => {
    console.log('Conectado: ' + `Puerto ${app.get('port')}`);
});
// Web Sockets
const io = socketIO("https://websocketspablo.herokuapp.com/");
io.on('connection', (socket) => {
    console.log(`New Connection ${socket.id}`);
    socket.on('chat:message', (data) => {
        io.sockets.emit('chat:message', data)
    });
    socket.on('chat:typing', (data) => {
        socket.broadcast.emit('chat:typing', data);
    })
});
