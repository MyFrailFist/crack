var express = require("express"),
	bodyParser = require("body-parser"),
	announcementCtrl = require("../../controller/announcementController");

var announcementRouter = express.Router();
announcementRouter.use(bodyParser.json());
announcementRouter.use(bodyParser.urlencoded({extended: true}));

announcementRouter.route("/:scope")
	.get(function(req,res) {
		announcementCtrl.getAnnouncement(req.params.scope, function(anncts) {
			res.json(anncts);
		});
	});

announcementRouter.route("/delete")
	.post(function(req,res) {
		announcementCtrl.deleteAnnouncement(req.body);
	});

announcementRouter.route("/")
	.post(function(req,res) {
		announcementCtrl.addAnnouncement(req.body);
	});

announcementRouter.route("/update")
	.post(function(req,res) {
		announcementCtrl.updateAnnouncement(req.body);
	});

module.exports = announcementRouter;