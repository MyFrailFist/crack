var express = require("express"),
	bodyParser = require("body-parser"),
	eventCalendarCtrl = require("../../controller/eventCalendarController.js");

var eventCalendarRouter = express.Router();
eventCalendarRouter.use(bodyParser.json());


eventCalendarRouter.route("/")
	.get(function(req,res) {
		eventCalendarCtrl.getCalendarEvent(function(calendarEvent){
			res.json(calendarEvent);

		})
	})

eventCalendarRouter.route("/delete")
	.post(function(req,res) {
		eventCalendarCtrl.deleteCalendarEvent(req.body);
	})

eventCalendarRouter.route("/")
	.post(function(req,res) {
		eventCalendarCtrl.addCalendarEvent(req.body);
	})

eventCalendarRouter.route("/update")
	.post(function(req,res) {
		eventCalendarCtrl.updateCalendarEvent(req.body);
	})

module.exports = eventCalendarRouter;