const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    customerID: {
      type: String,
      required: [true, "Customer Details are Required."],
    },
    routeID: { type: String, required: [true, "Delivery Route is Important"] },
    isSub: {
      type: Boolean,
      default: false,
      required: [true, "Subscription Identifier should be supplied"],
    },
    items: {
      type: [
        {
          productID: String,
          quantity: Number,
        },
      ],
      required: [true, "Any order without item is useless."],
    },
    deliveryDate: {
      type: Date,
      required: [true, "Starting Date of Subscription is required."],
    },
    addressID: {
      type: String,
      required: [true, "How will we deliver without address?"],
    },
    status: { type: String, default: "PENDING" },
    comment: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
