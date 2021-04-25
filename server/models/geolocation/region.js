const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const regionSchema = new Schema(
  {
    name: { type: String, required: [true, "What? A Region without a Name?"] },
    hubID: { type: String, required: [true, "No Hub, No Region"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Region", regionSchema);
