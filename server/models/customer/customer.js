const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addressSchema = new Schema(
  {
    name: { type: String, required: [true, "Address Name is Required."] },
    lat: { type: String },
    long: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", addressSchema);

const customerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Customer First Name is Required."],
    },
    lastName: {
      type: String,
      required: [true, "Customer Last Name is Required."],
    },
    wallet: { type: Number, default: 0 },
    phone: { type: String, required: [true, "Phone Number is extremely imp"] },
    locationID: {
      type: String,
      required: [true, "Customer can't be added without a location"],
    },
    email: { type: String },
    addresses: [addressSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
