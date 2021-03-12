const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    Customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    DeliveryAddress: String,
    Description: String,
    Items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'product'
    }],
    Payment: String,
    Status: String,
    Total: Number
},{ timestamps: true });

module.exports = mongoose.model('order',orderSchema);