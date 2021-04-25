const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationSchema = new Schema(
  {
    name: String,
    regionID: String,
    routeID: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Location", locationSchema);
