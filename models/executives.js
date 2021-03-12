const mongoose = require('mongoose');

const executiveSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    ID: String,
    IsActive: String,
    Password: String,
    Photo: String,
}, { timestamps: true });

module.exports = mongoose.model('executive',executiveSchema);