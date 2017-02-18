var port = process.env.PORT || 8080
var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Run the server with sockets
var io = require('socket.io').listen(
	app.listen(port, function(req, res){
	console.log('Listening on port ' + port);
	})
	
);

//Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Database configuration
require('./configuration/mongo-config')(mongoose);

//Database
var db = require('./dal/main')(mongoose);

//Routes
app.use('/api/', router);

//Static files
app.use('/static/', express.static('public'));

//Webservices
require('./services/user-service')(app, router, db);
require('./services/authentication-service')(app, router, db);

//Chat
require('./websockets/socketio-chat')(app, io);
