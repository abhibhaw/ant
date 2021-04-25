const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const routeSchema = new Schema(
  {
    routeName: String,
    executiveID: String,
    hubID: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Route", routeSchema);
