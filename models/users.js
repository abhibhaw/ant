const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: String,
    FirstName: String,
    LastName: String,
    Wallet: Number,
    Gender: String,
    Addresses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'address'
    }],
    Birthday: Date,
    DeliveryExecutiveID: String,
},{ timestamps: true });

module.exports = mongoose.model('user',userSchema);