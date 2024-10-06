const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
    Category: String,
    Size: Array,
    price: Number
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product