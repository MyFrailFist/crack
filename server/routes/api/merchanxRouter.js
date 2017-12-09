'use strict'


var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var merchanxRouter = express.Router();
merchanxRouter.use(bodyParser.json());


merchanxRouter.route('/')
	.get(function(req, res){
		console.log("hello")
	})


module.exports = merchanxRouter;