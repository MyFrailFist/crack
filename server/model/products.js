'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var productSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	}
});

var Products = mongoose.model('Products', productSchema);

module.exports = Products;