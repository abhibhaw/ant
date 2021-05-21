const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    subTotal: { type: String, required: [true, "Total Amount is Required."] },
    type: { type: String, required: [true, "Type of Transaction is Imp"] },
    customerID: {
      type: String,
      required: [true, "Every transaction needs a customer ID"],
    },
    orderID: { type: String },
    comment: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
