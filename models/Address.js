const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    address: String
},{ timestamps: true });

module.exports = mongoose.model('address',addressSchema);
