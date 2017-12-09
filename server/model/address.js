var mongoose = require("mongoose");

var addressSchema = new mongoose.Schema({
	estate: String,
    country: String,
    unit: String,
    block: String
});

var address = mongoose.model("address", addressSchema);

module.exports = address;