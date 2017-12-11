var announcement = require("../model/announcement"),
	address = require("../model/address");

//get user details here

function getAnnctFromDb(callback) {
	address.find({estate: user.address.estate}, function(err, addr) {
		if(err) {
			console.log(err);
		} else {
			//get ObjectId of each address
			annctObjectIds = annct.map(eachAnnct => eachAnnct._id);

			announcement.find({address : {$in: annctObjectIds}})
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
	announcement.findByIdAndRemove(annct._id, function(err) {
		if(err) {
			console.log(err);
		}
	});
}

function addAnnctToDb(annct) {
	annct.userName = user.username;
	annct.uid = user.uid;

	var annctAddress = {
		estate: annct.address.estate,
		block: annct.address.block,
		unit: annct.address.unit
	};

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