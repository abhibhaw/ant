const mongoose = require('mongoose');

const subscriptionSchema = mongoose.Schema({
    Customer: {
        type: mongoose.Schema.Types.ObjectId
    },
    Delivered: [{
        type: Date
    }],
    DeliveryAddress: String,
    DeliveryExecutiveID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'executive'
    },
    Description: String,
    Frequency: Object,
    NextDelivery: Date,
    Payment: String,
    Product: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    Quantity: Number,
    Status: String,
    Total: Number
},{ timestamps: true});

module.exports = mongoose.model('subscription', subscriptionSchema);