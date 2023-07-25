const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
  productList: {
    type: [{ type: mongoose.Schema.ObjectId, ref: 'products' }],
  },
  customerID: {
    type: { type: mongoose.Schema.ObjectId, ref: 'customers' },
  },
});

const cartModel = mongoose.model('cart', cartSchema);
module.exports = customerModel;
