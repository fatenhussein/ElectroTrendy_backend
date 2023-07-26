const Cart = require('../models/cartModel');

// 

// /cart/addItem/:id

// {quantity ,customerId }

exports.addItemToCart = (req, res) => {
  try {
    const { quantity, customerId } = req.body;
    const { productId } = req.params;

    res.status(201).json({
      message: 'success',
      data: { newCart },
    });
  } catch (err) {
    console.log(err);
  }
};

// add to cart

// find the user cart  Cart.find({customerId })

// userCart = {id :65465498 ,  customerId : 45 , cartItems : []}

// const product =  userCart.cartItems.find((item) => item.productId === productId)

// if(product) {
//
//product.quantity+=quantity;
//}else{
//userCart.cartItems.push({productId , quantity})
// }



//handel add item to cart before he signed in 
//-----------------------------------------------------
//add to cart/ delete from cart/get cart / routes 
