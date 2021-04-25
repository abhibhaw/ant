const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const executiveSchema = new Schema(
  {
    executiveName: String,
    phoneNumber: String,
    imageUrl: String,
    password: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Executive", executiveSchema);
