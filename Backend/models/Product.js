const mongoose = require("mongoose")

// make model for database
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInsStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});


const Product = mongoose.model("product", productSchema)


module.exports = Product