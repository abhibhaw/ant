const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hubSchema = new Schema(
  {
    hubName: String,
    address: String,
    mobileNo: Number,
    email: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hub", hubSchema);
