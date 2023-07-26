const Customer = require('../models/customerModel');
const jwt = require('jsonwebtoken');
exports.signUp = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, phoneNumber } = req.body;
    const customer = await Customer.create({
      name,
      email,
      password,
      confirmPassword,
      phoneNumber,
    });
    //create token
    const token = jwt.sign({ id: customer._id }, process.env.JWT_SECRET);
    console.log(token);
    res.status(201).json({
      state: 'success',
      token,
      data: { customer },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.signIn = (req, res) => {
  try {
    const { email, password } = req.body;

    //1)Check if email and password exist
    if (!email || !password) {
      throw new Error('Please provide your email and password');
    }
    //2)Check if user exist && password is correct
    const currentUser = Customer.findOne({ email });

    //3)If everything ok, send token to client
    const token = jwt.sign({ id: currentUser._id }, process.env.JWT_SECRET);
    res.status(200).json({
      status: 'success',
      token,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
