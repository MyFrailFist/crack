'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var maintenanceReportSchema = new Schema({
	faultType: {
		type: String,
		required: true
	},
	priority: {
		type: String
	},
	detail:{
		type: String,
		required: true
	},
	resident: {
		type: String, 
		required: true
	},
	propertyOwner: {
		type: String,
		required: true
	},
	phoneNumber: {
		type: String, 
		required: true
	}
});

var MaintenanceReports = mongoose.model('MaintenanceReports', maintenanceReportSchema);

module.exports = MaintenanceReports;

