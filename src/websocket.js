const socket = require('socket.io');

exports.setupWebSocket = (server) => {
    const io = socket(server); // o socket vem do const socket = require('socket.io');

    io.on('connection', socket =>{
        console.log(socket.id);
    })
}