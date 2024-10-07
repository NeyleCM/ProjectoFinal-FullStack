const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
    category: String,
    size: Array,
    price: Number
})

const Product = mongoose.Model("Product", productSchema)

module.exports = Product