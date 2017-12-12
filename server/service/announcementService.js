var announcement = require("../model/announcement"),
	address = require("../model/address");

//get user details here
var user = {
	uid: "hahaha1234",
	address: {
		estate: "hahaha123",
		block: "hahaha123",
		unit: "123"
	},
	username: "MAGICMAN"
}

function getAnnctFromDb(callback) {
	address.find({estate: user.address.estate}, function(err, addr) {
		if(err) {
			console.log(err);
		} else {
			//get ObjectId of each address
			addressObjectIds = addr.map(eachAddr => eachAddr._id);

			announcement.find({address : {$in: addressObjectIds}})
				.populate("address")
				.exec(function(err, annct) {
					if(err) {
						console.log(err);
					} else {
						callback(annct, user);
					}
				})
		}
	});
}

function deleteAnnctFromDb(annct) {
	announcement.findByIdAndRemove(annct._id, function(err, removedAnnct) {
		if(err) {
			console.log(err);
		} else {
			//Not populated annct
			//Delete associated address
			address.findByIdAndRemove(removedAnnct.address, function(err, removedAddr) {
				if(err) {
					console.log(err);
				}
			});
		}
	});
}

function addAnnctToDb(annct) {
	//Add in necessary details at server side.
	annct.userName = user.username;
	annct.uid = user.uid;

	var annctAddress = {
		estate: annct.address.estate,
		block: annct.address.block,
		unit: annct.address.unit
	};

	//Clear faulty address
	delete annct.address;

	announcement.create(annct, function(err, createdAnnct) {
		if(err) {
			console.log(err);
		} else {
			address.create(annctAddress, function(err, createdAddress) {
				createdAnnct.address = createdAddress;
				createdAnnct.save();
			})
		}
	});
}

function updateAnnctToDb(annct) {
	announcement.findByIdAndUpdate(annct._id, annct, function(err, updated) {
		if(err) {
			console.log(err);
		} 
	});
}

module.exports = {
	getAnnctFromDb: getAnnctFromDb,
	deleteAnnctFromDb: deleteAnnctFromDb,
	addAnnctToDb: addAnnctToDb,
	updateAnnctToDb: updateAnnctToDb
}