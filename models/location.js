const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    region: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'region'
    },
    route: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'route'
    },
    area: String,
    subArea: String,
    visibleOn: String
},{ timestamps: true });

module.exports = mongoose.model('location',locationSchema);