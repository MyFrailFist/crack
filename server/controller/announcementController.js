var announcementSvc = require("../service/announcementService");

function getAnnouncement(scope, callback) {
	announcementSvc.getAnnctFromDb(function(annct, user) {
		var collectedAnnct = [];

		annct.forEach(function(eachAnnct) {
			var userAddress = user.address,
				annctAddress = eachAnnct.address;
			if(eachAnnct.approved === true || user.propertyManager === true) {
				if(eachAnnct.scope === scope) {
					if(scope === "estate" && annctAddress.estate === userAddress.estate) {
						collectedAnnct.push(eachAnnct);
					} else if(scope === "block" && annctAddress.block === userAddress.block) {
						collectedAnnct.push(eachAnnct);
					} else if(scope === "unit" && annctAddress.unit === userAddress.block) {
						collectedAnnct.push(eachAnnct);
					} else if(scope === "unapproved") {
						collectedAnnct.push(eachAnnct);
					} else if(scope === "my" && eachAnnct.uid === user.uid) {
						collectedAnnct.push(eachAnnct);
					}
				}
			}
		});
			
		callback(collectedAnnct);
	});
}

function deleteAnnouncement(annct) {
	//Permission check here
	announcementSvc.deleteAnnctFromDb(annct);
}

function addAnnouncement(annct) {
	//permission check here
	announcementSvc.addAnnctToDb(annct);
}

function updateAnnouncement(annct) {
	//permission check here
	announcementSvc.updateAnnctToDb(annct);
}

module.exports = {
	deleteAnnouncement: deleteAnnouncement,
	addAnnouncement: addAnnouncement,
	getAnnouncement: getAnnouncement,
	updateAnnouncement: updateAnnouncement
}