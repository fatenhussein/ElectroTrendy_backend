const mongoose = require('mongoose');
const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required,
  },
  email: {
    type: String,
    unique: true,
    required,
  },
  phoneNumber: {
    type: Number,
    unique: true,
  },
  password: {
    type: String,
    required,
  },
  img: {
    type: String,
    default:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shop.svg/1200px-Shop.svg.png',
  },

  vendorProductList: {
    type: Array,
    default: [],
  },
});

const vendorModel = mongoose.model('vendors', vendorSchema);
module.exports = vendorModel;
