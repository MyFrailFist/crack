'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var MaintenanceService = require('../../service/maintenanceService');

var maintenanceRouter = express.Router();
maintenanceRouter.use(bodyParser.json());


maintenanceRouter.route('/')
	.get(function(req, res){
		console.log("hello")
	})

maintenanceRouter.route('/test1')	
	.get(MaintenanceService.testMR)



module.exports = maintenanceRouter;