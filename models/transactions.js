const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    Amount: Number,
    Customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    Order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    },
    Payment: String,
    Type: String
}, { timestamps: true });

module.exports = mongoose.model('transaction',transactionSchema);