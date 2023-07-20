const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required,
  },
  price: {
    type: Number,
    required,
  },
  desc: {
    type: String,
    required,
  },
  quantity: {
    type: Number,
    required,
  },
  img: {
    type: String,
    required,
  },

  vendorId: {
    type: String,
    required,
  },
  cat: {
    type: String,
    required,
  },
});

const productModel = mongoose.Model('products', productSchema);
module.exports = productModel;
