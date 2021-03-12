const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Category: String,
    Description: String,
    GST: String,
    Name: String,
    Photos: [{
        type: String
    }],
    Popularity: Number,
    Price: Number,
    // NEED TO MODIFY THIS
    Status: [{
        type: String
    }]
},{ timestamps: true });

module.exports = mongoose.model('product',productSchema);