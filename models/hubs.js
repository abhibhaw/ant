const mongoose = require('mongoose');

const hubSchema = new mongoose.Schema({
    HubID: String,
    Name: String,
    PhoneNumber: String,
    Address: String
},{ timestamps: true });