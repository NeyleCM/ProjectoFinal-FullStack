const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
    Category: String,
    Size: Array,
    price: Number
})

const Product = mongoose.Model("Product", productSchema)

module.exports = Product