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

exports.getOneMaintenanceReport = function(req, res){
	var query = 'what is the query';

	MaintenanceReports.findOne(query).exec(function(err, response){
		if(err) return(err);
		console.log(response);
		return res.json(response);
	})
}


exports.testMR = function(req, res){
	//going to create some fake reports with this
	console.log('owerwue');
	var query = "wat is the query ";
	return res.json();
}