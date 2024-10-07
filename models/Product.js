const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
    category: String,
    size: Array,
    price: Number
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product