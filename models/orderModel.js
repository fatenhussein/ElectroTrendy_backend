const mongoose = require('mongoose');
const ordersSchema = new mongoose.Schema({
  orderTime: {
    type: Date,
    default: Date.now(),
  },
  vendorIDs: {
    type: [String],
  },

  productList: {
    type: [String],
  },
  customerID: {
    type: String,
  },

  orderState: {
    type: String,
  },
  totalPrice: {
    type: Number,
  },
});

const ordersModel = mongoose.Model('orders', ordersSchema);
module.exports = ordersModel;
