const mongoose = require("mongoose")
const User = require('./users')

const addressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  full_name: String,
  phone: String,
  pincode: String,
  address_line1: String,
  address_line2: String,
  city: String,
  state: String,
  country: String
});

module.exports = mongoose.model('Address', addressSchema);