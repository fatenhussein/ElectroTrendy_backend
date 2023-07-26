const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
  productList: [
    {
      productId: { type: mongoose.Schema.ObjectId, ref: 'products' },
      quantity: Number,
    },
  ],

  customerID: {
    type: { type: mongoose.Schema.ObjectId, ref: 'customers' },
  },
});

const cartModel = mongoose.model('cart', cartSchema);
module.exports = cartModel;
