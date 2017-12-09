'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var fitbitRouter = express.Router();
fitbitRouter.use(bodyParser.json());


fitbitRouter.route('/')
	.get(function(req, res){
		console.log("hello")
	})


module.exports = fitbitRouter;