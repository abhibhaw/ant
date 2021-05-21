const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type: String, required: [true, "Product Name is Required."] },
    categoryID: {
      type: String,
      required: [true, "One category must be assigned."],
    },
    description: { type: String },
    price: { type: Number, require: [true, "Price can't be null."] },
    photoURL: {
      type: String,
      default:
        "https://github.com/GEPTON-INFOTECH/GEPTON-INFOTECH/raw/main/branding/no_image.png",
    },
    statusHub: { type: [String] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
