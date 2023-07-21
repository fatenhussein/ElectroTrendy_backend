const express = require('express');

const {
  createVendor,
  getVendor,
  deleteVendor,
  updateVendor,
} = require('./../controllers/vendorControllers');
const router = express.Router();

//  create new vendor
router.route('/').post(createVendor);

// get specific  vendor and update , delete the vendor 
router.route('/:id').get(getVendor).patch(updateVendor).delete(deleteVendor);

module.exports = router;
