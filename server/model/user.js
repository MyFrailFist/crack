'use strict'

var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
	uid: String,
	name: String,
	address: [{type: mongoose.Schema.Types.ObjectId, ref: "address"}],
	phoneNumber: Number,
	email: String,
	resident: Boolean,
	propertyManager: Boolean,
	username: String,
	password: String,
	firstName: String,
	lastName: String,
	onBoard: Boolean,
	timeStamp: Number,
	fitbitToken: String,
	userEvents: [{type: mongoose.Schema.Types.ObjectId, ref: "userEvent"}];
});

var user = mongoose.model("user", userSchema);

module.exports = user;