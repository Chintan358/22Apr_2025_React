const mongoose = require("mongoose")
const User = require('./users')
const Order = require("./orders")

const paymentSchema = new mongoose.Schema({
    payment_id: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    amount: Number,
    status: { type: String, enum: ['success', 'failed', 'pending'], default: 'pending' },
    payment_date: { type: Date, default: Date.now },
    method: String
});

module.exports = mongoose.model('Payment', paymentSchema);
