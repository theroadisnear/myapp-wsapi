module.exports = function (mongoose){

	var userSchema = new mongoose.Schema({
	id: Number,
	username: String,
	password: String,
	});

	return module.exports = mongoose.model('users', userSchema);
};