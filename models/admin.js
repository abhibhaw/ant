const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true
    },
    Address: String,
    FirstName: String,
    LastName: String,
    Password: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
    }
},{ timestamps: true }); 

module.exports = mongoose.model('admin',adminSchema);