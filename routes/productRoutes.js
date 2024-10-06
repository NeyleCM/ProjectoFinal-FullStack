const express = require("express")
const router = express.Router()
const Product = require("../models/Product.js")

router.get("/products/:productId", async (req, res) => {
    try {
        const id = req.params.productId;
        const product = await Product.findById(id);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get a producto by id"})
    }
})


module.exports = router