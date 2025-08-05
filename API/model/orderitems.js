const mongoose = require("mongoose")
const User = require('./users')
const Product = require('./products')
const Order = require("./orders")

const orderItemSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
    price_at_time: Number
})

module.exports = new mongoose.model("OrderItem", orderItemSchema)