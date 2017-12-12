'use strict'

var eventCalendarSvc = require("../service/eventCalendarService");

//Convert my own event model to EventCalendar.
function convertToCalendarEvent(event) {
	return {
		_id: event._id,
		uid: event.uid,
		title: event.title,
		description: event.description,
		start: new Date(event.date.startDate),
		end: new Date(event.date.endDate),
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
			startDate: new Date(event.start).getTime(),
			endDate: new Date(event.end).getTime(),
			dateCreated: new Date()
		},
		draggable: event.draggable,
		resizable: event.resizable
	}
}

function getCalendarEvent(callback) {
	var calendarEvents;

	eventCalendarSvc.getUserEvent(function(userEvent){
		calendarEvents = userEvent.map( event => convertToCalendarEvent(event));
		callback(calendarEvents);
	})
}

function deleteCalendarEvent(calendarEvent) {
	var userEvent = convertToUserEvent(calendarEvent);

	eventCalendarSvc.deleteUserEvent(userEvent);

}

function addCalendarEvent(calendarEvent) {
	var userEvent = convertToUserEvent(calendarEvent);

	eventCalendarSvc.addUserEvent(userEvent);
}

function updateCalendarEvent(calendarEvent) {
	var userEvent = convertToUserEvent(calendarEvent);

	eventCalendarSvc.updateUserEvent(userEvent);
}

module.exports = { 
	getCalendarEvent: getCalendarEvent,
	deleteCalendarEvent: deleteCalendarEvent,
	addCalendarEvent: addCalendarEvent,
	updateCalendarEvent: updateCalendarEvent
}