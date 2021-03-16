const mongoose = require('mongoose');

const hubSchema = new mongoose.Schema({
    Name: String,
    PhoneNumber: String,
    Address: String,
    Email: String
},{ timestamps: true });