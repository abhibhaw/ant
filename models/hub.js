const mongoose = require('mongoose');

const hubSchema = new mongoose.Schema({
    hubName: String,
    displayName: String,
    address: String,
    country: String,
    state: String,
    city: String,
    mobileNo: String,
    landline: String,
    website: String,
    regions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'region'
    }]
},{ timestamps: true });

module.exports = mongoose.model('hub',hubSchema);