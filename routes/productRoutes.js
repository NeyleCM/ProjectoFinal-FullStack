const express = require("express")
const router = express.Router()
const Product = require("../models/Product.js")
const { productsTemplate, productIdTemplate} = require("../controllers/productController.js")

router.get("/products", async (req, res) => {
    try { //mongoose-paginate?
        const getProducts = await Product.find()
        res.status(200).json(getProducts)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get all products"})
    }
})

router.get("/products/camisetas", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

router.get("/products/pantalones", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

router.get("/products/zapatos", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

router.get("/products/accesorios", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

router.get("/products/:productId", async (req, res) => {
    try {
        const id = req.params.productId;
        const product = await Product.findById(id);
        const template = productIdTemplate(product)
        res.status(200).send(template)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get a producto by id"})
    }
})


module.exports = router