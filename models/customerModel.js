const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
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

  password: {
    type: String,
    required,
  },
  phoneNumber: {
    type: Number,
    unique: true,
  },
  order: {
    type: Array,
    default: [],
  },
  img: {
    type: String,
    default:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shop.svg/1200px-Shop.svg.png',
  },
});

const customerModel = mongoose.Model('customers', customerSchema);
module.exports = customerModel;
