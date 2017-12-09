'use strict'


var MaintenanceReports = require('../model/maintenanceReports');


exports.getAllMaintenanceReports = function(req, res){
	var query = "what is the query ";

	MaintenanceReports.find(query).exec(function(err, response){
		if(err) return(err);
		console.log(response);
		return res.json(response);
	})
}