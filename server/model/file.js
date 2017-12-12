'use strict'

var mongoose = require("mongoose");

var fileSchema = new mongoose.Schema({
	//use mongoDB's _id
	//file?
	//nameRefToStorage
	//nameRefToDtabase in case storage service cannot rename file
	fileName: String,
	size: {
		sizeNumber: Number,
		sizeExtension: String
	}
	downloadUrl: String,
	extension: String,
	createdOn: Date,
});

var file = mongoose.model("file", fileSchema);

module.exports = file;