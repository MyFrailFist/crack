var mongoose = require("mongoose");

var announcementSchema = new mongoose.Schema({
	//use mongodb _id
	uid: String,
	title: String,
	content: String,
	date: Date,
	scope: String,
	address: {type: mongoose.Schema.Types.ObjectId, ref: "address"},
	userName: String,
	approved: Boolean
})

var announcement = mongoose.model("announcement", announcementSchema);