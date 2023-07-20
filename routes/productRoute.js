const express = require('express');

const router = express.Router();

// get all products
router.route('/').get().post();

// get specific product
router.route('/:id').get().patch().delete();

module.exports = router;
