const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subscriptionSchema = new Schema(
  {
    customerID: {
      type: String,
      required: [true, "Customer Details are Required."],
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
    startDate: {
      type: Date,
      required: [true, "Starting Date of Subscription is required."],
    },
    nextDeliveryDate: {
      type: Date,
    },
    endDate: { type: Date },
    addressID: {
      type: String,
      required: [true, "How will we deliver without address?"],
    },
    status: { type: String, default: "PENDING" },
    frequency: {
      type: Number,
      required: [true, "Delivery Frequency is Mandatory"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscription", subscriptionSchema);
