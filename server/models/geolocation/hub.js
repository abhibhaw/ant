const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hubSchema = new Schema(
  {
    hubName: { type: String, required: [true, "Hub Name is Mandatory"] },
    address: { type: String, required: [true, "We need an address for App"] },
    mobileNo: { type: Number, required: [true, "No Mobile Number, No trust!"] },
    email: { type: String, required: [true, "Email is mandatory too!"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hub", hubSchema);
