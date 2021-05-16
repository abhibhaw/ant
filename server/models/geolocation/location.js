const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationSchema = new Schema(
  {
    name: { type: String, required: [true, "Location Name is Required."] },
    regionID: {
      type: String,
      required: [true, "Every location must have atleast one region."],
    },
    routeID: {
      type: String,
      required: [
        true,
        "Every location should be assigned to atleast one Route.",
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Location", locationSchema);
