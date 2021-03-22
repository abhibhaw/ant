const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    routeName: String,
    locations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'location'
    }],
},{ timestamps: true });

module.exports = mongoose.model('route', routeSchema);