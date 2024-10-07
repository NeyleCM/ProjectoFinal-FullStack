const express = require("express")
const router = express.Router()
const Product = require("../models/Product")

router.get("/products", async (req, res) => {
    try { //mongoose-paginate?
        const getProducts = await Product.find()
        res.status(200).json(getProducts)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get all products"})
    }
})

router.get("/products/:productId", async (req, res) => {
    try {
        const id = req.params.productId;
        const product = await Product.findById(id);
        res.status(200).json(id)
        //Falta el res con html, en cuanto este creado se sustituye por el res.json
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get a producto by id"})
    }
})

router.get("/dashboard", async (req, res) => {
    try {
        const products = await Product.find();  
        res.status(200).json(products);  
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error getting dashboard" });
    }
})

router.get("/dashboard/new", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

router.post("/dashboard", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

router.get("/dashboard/:productId", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

router.get("/dashboard/:productId/edit", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

router.put("/dashboard/:productId", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

router.delete("/dashboard/:productId/delete", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

//router.delete()

module.exports = router