module.exports = function (app, router, db){
	var User = db.user;
	var mongoose = require('mongoose');
	var newUser = User();

	router.get('/user/seed', function(req, res){
		console.log('POST: Seeding users');

		//checks if data seed is existing
		User.findOne({ 'username': 'theroadisnear'}, 'email', function(err, userQuery){
			if(err){
				return handleError(err);
			};
			res.json({ 'message': 'Data seed is existing!'});
		});

		//seeding
		newUser.id = 1,
		newUser.username = 'theroadisnear',
		newUser.password = 'admin123',
		console.log(newUser);

		User.create(newUser, function(err, saved){
			if(err){
				console.log('Error: Seeding failed', err);
			} else {
				console.log('Seeding successful');
			}
		});
	});

	return module.exports = {
		User: User,
		newUser: newUser
	}
}