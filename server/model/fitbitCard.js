'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fitbitCardSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	fitbitToken: {
		type: String, 
		required: true
	}
})


var FitbitCard = mongoose.model('FitbitCard', fitbitCardSchema);

module.exports = FitbitCard;