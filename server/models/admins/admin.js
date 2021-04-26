const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Your Username is required."],
    },
    firstName: {
      type: String,
      required: [true, "Name is Mandatory"],
    },
    lastName: String,
    password: {
      type: String,
      required: [true, "How will you login without password?"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", adminSchema);
