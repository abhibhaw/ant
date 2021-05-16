const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const routeSchema = new Schema(
  {
    routeName: { type: String, required: [true, "Route Name is Required."] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Route", routeSchema);
