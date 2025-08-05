const mongoose = require("mongoose")
const User = require('./users')
const Product = require('./products')

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 },
    added_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', cartSchema);