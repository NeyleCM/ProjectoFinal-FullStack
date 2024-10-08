const express = require("express")
const router = express.Router()
const Product = require("../models/Product.js")


router.get("/dashboard", async (req, res) => {
    try {
        const products = await Product.find();
        const template = productsTemplate("Dashboard", products)
        res.status(200).send(template)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get a producto by id"})
    }
})

router.get("/dashboard/login", async (req, res) => {
    try {
        const products = await Product.find();
        const template = productsTemplate("Dashboard", products)
        res.status(200).send(template)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get a producto by id"})
    }
})


router.get("/dashboard/new", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

router.post("/dashboard", async (req, res) => {
    try {
        const newProduct = await Product.create({
            ... req.body
        })
        const product = await Product.create(newProduct)
        res.status(201).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to create the product"})
    }
})

router.get("/dashboard/:productId", async (req, res) => {
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

router.get("/dashboard/:productId/edit", async (req, res) => {
    try {
        const id = req.params.productId;
        const product = await Product.findById(id);
        let template 
        res.status(200).send(template);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error to show the edit form" });
    }
})

router.put("/dashboard/:productId", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

router.delete("/dashboard/:productId/delete", async (req, res) => {
    try {
        const id = req.params.productId;
        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error to delete product" });
    }
})

module.exports = router