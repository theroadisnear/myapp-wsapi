module.exports = function(app, io){

	app.get('/chat', function(req, res){
		res.sendFile(__dirname+'/chat.html');
	});

	io.sockets.on('connection', function(socket){
		console.log('a cat connected');
		socket.on('disconnect', function(){
			console.log('cat disconnected');
		});
		socket.on('chat-message', function(msg){
			console.log('message: ' + msg);
			io.sockets.emit('chat-message', msg);
		});
	});
}