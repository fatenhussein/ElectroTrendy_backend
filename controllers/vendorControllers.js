const Vendor = require('../models/vendorModel');

exports.createVendor = async (req, res) => {
  try {
    const newVendor = await Vendor.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        vendor: newVendor,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);

    res.status(200).json({
      status: 'success',

      vendor,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateVendor = async (req, res) => {
  try {
    //By default, findOneAndUpdate() returns the document as it was before update was applied.
    //If you set new: true, findOneAndUpdate() will instead give you the object after update was applied.
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      vendor,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
