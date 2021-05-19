const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const executiveSchema = new Schema(
  {
    firstName: { type: String, required: [true, "firstName is Mandatory"] },
    lastName: { type: String, required: [true, "lastName is Mandatory"] },
    phone: {
      type: String,
      required: [true, "Phone Number is their username, so Mandatory"],
    },
    photoURL: {
      type: String,
      default:
        "https://github.com/GEPTON-INFOTECH/GEPTON-INFOTECH/raw/main/branding/xori.jpeg",
    },
    password: {
      type: String,
      required: [true, "How will they login without password?"],
    },
    isActive: { type: Boolean, default: false },
    routeID: {
      type: String,
      required: [true, "Every Executive must have atleast 1 route"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Executive", executiveSchema);
