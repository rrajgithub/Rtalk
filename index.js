var express = require('express');
var app = express();
var socket = require('socket.io');
var server = app.listen(8000, function(){
    console.log('listening for requests on port 8000,');
});

app.use(express.static('public'));
var io = socket(server);
io.on('connection', function(socket)  {
    console.log(' connected', socket.id);
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

});