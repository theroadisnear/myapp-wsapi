module.exports = function (app, router, db){
	var User = db.user;
	var mongoose = require('mongoose');
	var http = require('http');

	//Authenticate a user
	router.post('/authenticate', function (req, res){
		console.log('Authenticating......' + req.body.username);
		User.findOne({ 'username': req.body.username }, function (err, userQuery){
			if (err) {
				return handleError(err);
			};
			if (userQuery != null){
				if(userQuery.username == req.body.username && userQuery.password == req.body.password){
					delete userQuery['password'];
					return res.json({ 
						message: 'Authentication Success',
						user: userQuery
					});
				} else {
					return res.json({ error: 'Incorrect username or password'});
				}
			} else {
				return res.json({ error: 'Incorrect username or password' + req.body});
			}
		});
	});

}