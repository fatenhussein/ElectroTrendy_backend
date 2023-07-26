const express = require('express');
const Router = express.Router();

const {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
} = require('../controllers/cartController');

Router.route('/').get();
Router.route('/addItem/:id').patch(addItemToCart);
Router.route('/deleteItem/:id').patch(deleteItemFromCart);
Router.route('/removeItem/:id').patch(removeItemFromCart);

module.exports = Router;
