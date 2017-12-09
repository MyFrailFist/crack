var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
	//use mongoDb _id for uid
	name: String,
	address: [{type: mongoose.Schema.Types.ObjectId, ref: "Address"}],
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