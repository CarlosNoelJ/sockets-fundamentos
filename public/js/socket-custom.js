var socket = io();

// On -> listen process
socket.on('connect', function () {
    console.log('Connected to the Server');
});

socket.on('disconnect', function () {
    console.log('Connection Failed to the Server');
});

// Emmit -> send information
socket.emit('sendMessage', {
    user: 'Carlos',
    message: 'Hello World'
}, function (resp) {
    console.log('response: ', resp);
});

// Listen the information
socket.on('sendMessage', function (message) {
    console.log("Server: ", message);
});