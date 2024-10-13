const express = require("express")
const router = express.Router()
const Product = require("../models/Product.js")
const { productsTemplate, productIdTemplate, loginTemplate} = require("../controllers/productController.js")
const { auth } = require("firebase-admin")

router.get("/", (req, res) => res.redirect("/products"))

router.get("/products", async (req, res) => {
    try { //mongoose-paginate?
        const products = await Product.find()
        const template = productsTemplate("Todos los productos", products)
        res.status(200).send(template)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get all products"})
    }
})

router.get("/products/camisetas", async (req, res) => {
    try {
        const products = await Product.find({ category: "camisetas" });
        const template = productsTemplate("Camisetas", products)
        res.status(200).send(template)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get camisetas"})
    }
})

router.get("/products/pantalones", async (req, res) => {
    try {
        const products = await Product.find({ category: "pantalones" });
        const template = productsTemplate("Pantalones", products)
        res.status(200).send(template)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get pantalones"})
    }
})

router.get("/products/zapatos", async (req, res) => {
    try {
        const products = await Product.find({ category: "zapatos" });
        const template = productsTemplate("Zapatos", products)
        res.status(200).send(template)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get zapatos"})
    }
})

router.get("/products/accesorios", async (req, res) => {
    try {
        const products = await Product.find({ category: "accesorios" });
        const template = productsTemplate("Accesorios", products)
        res.status(200).send(template)
     } catch (error) {
         console.log(error)
         res.status(500).json({message: "Error to get accesorios"})
     }
 })

router.get("/products/login", (req, res) => {
    const template = loginTemplate()
    res.status(200).send(template)
})

router.post("/products/login", async (req, res) => {
    try {
        const { idToken } = req.body
        await auth.verifyToken(idToken)
        res.cookie("token", idToken, {httpOnly: true, secure: false})
        res.json({success: true})

    } catch (error) {
        console.error(error)
        res.json({error: "Toekn no valido"})
    }
})


router.get("/products/:productId", async (req, res) => {
    try {
        const _id = req.params.productId;
        console.log(_id)
        const product = await Product.findById(_id);
        const template = productIdTemplate(product)
        res.status(200).send(template)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get a producto by id"})
    }    
})    



module.exports = router