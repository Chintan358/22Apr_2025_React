const mongoose = require("mongoose")
const Category = require("./categories")

const productSchema = new mongoose.Schema({
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    name: String,
    description: String,
    price: Number,
    stock_quantity: Number,
    image_url: String,
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);