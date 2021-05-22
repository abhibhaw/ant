const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addressSchema = new Schema(
  {
    name: { type: String, required: [true, "Address Name is Required."] },
    customerID: {
      type: String,
      required: [true, "Each Address Must be assigned to some customer"],
    },
    lat: { type: String },
    long: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", addressSchema);
