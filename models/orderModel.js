const mongoose = require('mongoose');
const ordersSchema = new mongoose.Schema({
  orderTime: {
    type: Date,
    default: Date.now(),
  },
  // vendorIDs: {
  //   type: { type: mongoose.Schema.ObjectId, ref: 'vendors' },
  // },

  productList: {
    type: [{ type: mongoose.Schema.ObjectId, ref: 'products' }],
  },
  customerID: {
    type: { type: mongoose.Schema.ObjectId, ref: 'customers' },
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
