const Cart = require('../models/cartModel');

// add to cart
exports.addItemToCart = (req, res) => {
  try {
    const { quantity, customerId } = req.body;
    const { productId } = req.params;
    // find the user cart  Cart.find({customerId })
    const userCart = Cart.find({ customerId });
    let product = userCart.productList.find(
      (item) => item.productId === productId
    );
    if (!product) {
      product = userCart.productList.push({ quantity, productId });
    } else {
      product = userCart.productList.map((item) => {
        if (item.productId === productId) {
          item.quantity += 1;
        }
      });
    }
    res.status(201).json({
      message: 'success',
      data: { product },
    });
  } catch (err) {
    console.log(err);
  }
};
//delete 
exports.deleteItemFromCart = (req, res) => {
  try {
    const { customerId } = req.body;
    const { productId } = req.params;
    // find the user cart  Cart.find({customerId })
    const userCart = Cart.find({ customerId });
    let products = userCart.productList.filter(
      (item) => item.productId !== productId
    );

    res.status(201).json({
      message: 'success',
      data: { products },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.removeItemFromCart = (req, res) => {
  try {
    const { customerId } = req.body;
    const { productId } = req.params;
    // find the user cart  Cart.find({customerId })
    const userCart = Cart.find({ customerId });
    let product = userCart.productList.find(
      (item) => item.productId === productId
    );
    if (product.quantity > 1) {
      product = userCart.productList.map((item) => {
        if (item.productId === productId) {
          item.quantity -= 1;
        }
      });
    } else {
      product = userCart.productList.filter(
        (item) => item.productId !== productId
      );
    }

    res.status(201).json({
      message: 'success',
      data: { product },
    });
  } catch (err) {
    console.log(err);
  }
};
