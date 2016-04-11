module.exports = function (mongoose) {
	var url = 'mongodb://localhost/test1'
	console.log('Connecting on ' + url);
	mongoose.connect(url, function(err){
		if(err){
			console.log('Connection error: ' + err)
		} else {
			console.log('Connection Success')
		}
	});
};