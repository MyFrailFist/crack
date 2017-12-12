'use strict'

var mongoose = require("mongoose");

var addressSchema = new mongoose.Schema({
	estate: String,
    block: String,
    unit: String
});

var address = mongoose.model("address", addressSchema);

module.exports = address;