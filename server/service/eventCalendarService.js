'use strict'

// var getUser = require("../model/getUser.js");
var userEvent = require("../model/userEvent");

//Fetch raw user event
// var uid = getUidMethod();
var uid = "hahah123";


function getUserEvent(callback) {
	// getUser(uid, function(user) {
	// 	callback(user.userEvent);
	// });
	userEvent.find({ uid: `${uid}`}, function(err,events) {
		if(err) {
			console.log(err);
		} else {
			callback(events);
		}	
	});
}

function deleteUserEvent(event) {
	userEvent.findByIdAndRemove(event._id, function(err) {
		if(err) {
			console.log(err);
		}
	});
}

function addUserEvent(event) {
	event.uid = uid;
	userEvent.create(event, function(err, created) {
		if(err) {
			console.log(err);
		}
	});
}

function updateUserEvent(event) {
	userEvent.findByIdAndUpdate(event._id, event, function(err, updated) {
		if(err) {
			console.log(err);
		}
	})
}

module.exports = {
	getUserEvent: getUserEvent,
	deleteUserEvent: deleteUserEvent,
	addUserEvent: addUserEvent,
	updateUserEvent: updateUserEvent
}