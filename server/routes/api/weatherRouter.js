'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var weatherRouter = express.Router();
weatherRouter.use(bodyParser.json());


weatherRouter.route('/')
	.get(function(req, res){
		console.log("hello")
	})


module.exports = weatherRouter;