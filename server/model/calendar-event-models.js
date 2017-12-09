var mongoose = require("mongoose");

var userEventSchema = new mongoose.Schema({
	uid: String,
	date: {
		primary: String,
		secondary: String
	},
	title: String,
	description: String,
	color: {
		startDate: Number,
		endDate: Number,
		dateCreated: Date
	},
	draggable: Boolean,
	resizable: {
		beforeStart: Boolean,
		afterEnd: Boolean
	}

});

var userEvent = mongoose.model("userEvent", userEventSchema);

module.exports = userEvent;