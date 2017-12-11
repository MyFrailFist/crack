'use strict'

var eventCalenderSvc = require("../service/eventCalendarService");

//Convert my own event model to EventCalendar.
function convertToCalendarEvent(event) {
	return {
		_id: event._id,
		uid: event.uid,
		title: event.title,
		description: event.description,
		start: new Date(event.date.startDate),
		end: new Date(event.date.startDate),
		color: event.color,
		draggable: event.draggable,
		resizable: event.resizable
	}
}

function convertToUserEvent(event) {
	return {
		_id: event._id,
		uid: event.uid,
		color: event.color,
		title: event.title,
		description: event.description,
		date: {
			startDate: event.start.getTime(),
			endDate: event.end.getTime(),
			dateCreated: new Date()
		},
		draggable: event.draggable,
		resizable: event.resizable
	}
}

function getCalendarEvent(callback) {
	eventCalenderSvc.getUserEvent(function(userEvent){
		calendarEvents = userEvent.map( event => convertToCalendarEvent(event));
		callback(calendarEvents);
	})
}

function deleteCalendarEvent(calendarEvent) {
	var calenderEventObject = JSON.parse(calendarEvent),
		userEventObject = convertToUserEvent(calenderEventObject);
	eventCalendarSvc.deleteUserEvent(userEventObject);

}

function addCalendarEvent(calendarEvent) {
	var calendarEventObject = JSON.parse(userEvent),
		userEventObject = convertToUserEvent(calenderEventObject);
	eventCalendarSvc.addUserEvent(userEventObject);
}

function updateCalendarEvent(calendarEvent) {
	var calendarEventObject = JSON.parse(userEvent),
		userEventObject = convertToUserEvent(calenderEventObject);
	eventCalendarSvc.updateUserEvent(userEventObject);
}

module.exports = { 
	getCalendarEvent: getCalendarEvent,
	deleteCalendarEvent: deleteCalendarEvent,
	addCalendarEvent: addCalendarEvent,
	updateCalendarEvent: updateCalendarEvent
}