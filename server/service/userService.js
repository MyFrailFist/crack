'use strict'

var User = require('../model/users');


exports.getUser = function(user, callback){
	var userEmail = user.email;
	console.log("the user email is ",userEmail);
	User.find(user).exec(function(err, response){
		if(err) return(err);
		console.log("found the response");
		return res.json(response);
	})

}

