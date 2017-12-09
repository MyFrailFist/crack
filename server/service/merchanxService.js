'use strict'

var Products = require('../model/products');





exports.getAllProducts = function(req,res){
	var query = "Heelo test"
	console.log(query)
	Products.find(query).exec(function(err, response){
		if(err) return (err);
		console.log("found the responses", response);
		return res.json(response);
	})
} 


exports.getProduct = function(req, res){
	var query = "Userid here";
	console.log(query);
	Products.findOne(query).exec(function(err, response){
		if(err) return(err);
		console.log("the response is", response);
		return res.json(response);
	})
}

