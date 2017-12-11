'use strict'


var MaintenanceReports = require('../model/maintenanceReports');


var async = require('async');


exports.getAllMaintenanceReports = function(req, res){
	var query = "what is the query ";

	MaintenanceReports.find(query).exec(function(err, response){
		if(err) return(err);
		console.log(response);
		return res.json(response);
	})
}


exports.testMR = function(req, res){
	console.log('owerwue');
	return res.json();
}