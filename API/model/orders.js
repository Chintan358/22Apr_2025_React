const mongoose = require("mongoose")
const User = require('./users')


const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  total_amount: Number,
  status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
  payment_id: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);