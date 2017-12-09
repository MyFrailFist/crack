'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var maintenanceRouter = express.Router();
maintenanceRouter.use(bodyParser.json());


maintenanceRouter.route('/')
	.get(function(req, res){
		console.log("hello")
	})




module.exports = maintenanceRouter;