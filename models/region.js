const mongoose = require('mongoose');

const regionSchema = new mongoose.Schema({
    regionName: String,
    city: String,
    hub: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hub'
    },
    visibleOn: String,
    locations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'location'
    }]
},{ timestamps: true });

module.exports = mongoose.model('region',regionSchema);