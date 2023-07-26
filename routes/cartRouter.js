const express = require('express');
const Router = express.Router();

const {} = require('../controllers/cartController');

Router.route('/').get();
Router.route('/addItem/:id').patch();
Router.route('/deleteItem/:id').patch();

module.exports = Router;
