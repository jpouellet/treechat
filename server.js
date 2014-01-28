var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(process.env.PORT);

app.configure(function() {
	server.use('/static', express.static(__dirname + '/static'));
});
app.get('/', function(req, res) {
	res.sendfile(__dirname + 'index.html');
});

io.sockets.on('connection', function(socket) {
	socket.on('disconnect', function() {
	});
});
