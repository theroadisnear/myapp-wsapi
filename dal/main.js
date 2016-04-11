module.exports = function (mongoose){
	var user = require('./models/user')(mongoose);

	return module.exports = {
		user: user
	}
};