const {io} = require('../server');

io.on('connection', (client) => {
    console.log('user connected');

    client.emit('sendMessage', {
        user: 'Admin',
        message: 'Welcome to the App'
    });

    client.on('disconnect', () => {
        console.log('user disconnected');
    });

    // Listen Client
    client.on('sendMessage', (data, callback) => {

        console.log(data);

        client.broadcast.emit('sendMessage',data);

        // if (message.user) {
        //     callback({
        //         resp: 'All OK'
        //     });    
        // }else {
        //     callback({
        //         resp: 'All BAD !!!!!!!!!!!!!!!!!!!!'
        //     });    
        // }

        
    });
});