var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(process.env.PORT);

app.use(express.static('static'));
app.get('/', function(req, res) {
	res.sendfile(__dirname + 'index.html');
});

io.sockets.on('connection', function(socket) {
	socket.on('disconnect', function() {
	});
});
