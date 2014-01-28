var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(process.env.PORT);

app.use('/static', express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/index.html'));

io.sockets.on('connection', function(socket) {
	socket.on('disconnect', function() {
	});
});
