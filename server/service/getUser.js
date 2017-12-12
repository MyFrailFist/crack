'user strict'

var user = require("../model/user.js");

module.exports = function(uid, callback){
	user.findOne({uid: uid})
	.populate("userEvent")
	.exec(function(err, user){
		if(err){
			console.log(err);
		} else {
			callback(user);
		}
	})
}
