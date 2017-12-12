'use strict'

var request = require('request');








exports.getWeather24hours = function(req, res){
	var query = "what is the query again";

	console.log(query);

	request({
		url:"ufeiurbeiurb"
	}, function(err, response){
		if(err) return(err);
		console.log(response)
		return res.json(response)	
	})
}

exports.getWeather7days = function(req, res){
	var query = 'what is the query again';
	console.log(query);
	request({
		url: 'ergergerg'
	}, function(err, response){
		if(err) return(err);
		console.log(response);
		return res.json(response)
	})
}