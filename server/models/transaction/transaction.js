const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    subTotal: { type: String, required: [true, "Total Amount is Required."] },
    isDebit: { type: Boolean, required: [true, "Type of Transaction is Imp"] },
    customerID: {
      type: String,
      required: [true, "Every transaction needs a customer ID"],
    },
    date: {
      type: Date,
      required: [true, "Transaction date can help in tracking"],
    },
    orderID: { type: String },
    comment: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
