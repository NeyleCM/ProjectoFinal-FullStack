const express = require("express")
const router = express.Router()
const Product = require("../models/Product.js")
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const { authDasboardCntr, authIdTemplate, createProductTemplate, editProductTemplate, loginTemplate } = require("../controllers/authController.js")
const authMiddleware = require("../middlewares/authMiddleware.js")
const sizeArray = ["xs", "s", "m", "l", "xl", "xxl", 39, 40, 41, 42, 43, 44]

// Mostrar todos los productos en el Dashboard

router.get("/dashboard", /*authMiddleware,*/ async (req, res) => {
    try {
        const products = await Product.find();
        const template = authDasboardCntr("Dashboard", products)
        res.status(200).send(template)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get a producto by id"})
    }
})

router.get("/dashboard/camisetas", async (req, res) => {
    try {
        const products = await Product.find({ category: "camisetas" });
        const template = authDasboardCntr("Camisetas", products)
        res.status(200).send(template)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get camisetas"})
    }
})

router.get("/dashboard/pantalones", async (req, res) => {
    try {
        const products = await Product.find({ category: "pantalones" });
        const template = authDasboardCntr("Pantalones", products)
        res.status(200).send(template)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get pantalones"})
    }
})


router.get("/dashboard/zapatos", async (req, res) => {
    try {
        const products = await Product.find({ category: "zapatos" });
        const template = authDasboardCntr("Zapatos", products)
        res.status(200).send(template)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get zapatos"})
    }
})

router.get("/dashboard/accesorios", async (req, res) => {
    try {
        const products = await Product.find({ category: "accesorios" });
        const template = authDasboardCntr("Accesorios", products)
        res.status(200).send(template)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get accesorios"})
    }
})

router.get("/dashboard/new", authMiddleware, async (req, res) => {
    try {
        const template = createProductTemplate();
        res.status(200).send(template); //Aqui hay que hacer un formulario donde realizamos el nuevo producto
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error to show the form" });
    }
})

// Crear un nuevo producto
router.post("/dashboard", authMiddleware, async (req, res) => {
    try {
        //console.log([req.body.xs.id, req.body.s, req.body.m, req.body.l, req.body.xl, req.body.xxl])
        const haveSize = []

        sizeArray.forEach(element => {
            if(req.body[element] == "on"){
                haveSize.push(element)
            }
        })
        const newProduct = new Product({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            category: req.body.category,
            size: haveSize,
            price: req.body.price
        })
        await newProduct.save()
        //res.status(201).json(product)
        res.redirect("/dashboard")
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to create the product"})
    }
})

// Ver detalles de un producto específico en el Dashboard
router.get("/dashboard/:productId", authMiddleware, async (req, res) => {
    try {
        const id = req.params.productId;
        const product = await Product.findById(id);
        const template = authIdTemplate(product)
        res.status(200).send(template)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to get a producto by id"})
    }
})

// Mostrar el formulario para editar un producto
router.get("/dashboard/:productId/edit", authMiddleware, async (req, res) => {
    try {
        const id = req.params.productId;
         // Validar que el ID sea un ObjectId válido
         if (!ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }
        const product = await Product.findById(id);
         //En caso de que el producto no se encuentre
         if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const template = editProductTemplate(product)
        res.status(200).send(template);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error to show the edit form" });
    }
})

// Actualizar un producto
router.put("/dashboard/:productId", authMiddleware, async (req, res) => {
    try {
        //console.log([req.body.xs.id, req.body.s, req.body.m, req.body.l, req.body.xl, req.body.xxl])
        console.log(req.body);
        let haveSize = []
        const _id = req.params.productId
        console.log(_id)

        sizeArray.forEach(element => {
            if(req.body[element] == "on"){
                haveSize.push(element)
            }
        })
        const product = await Product.findById(_id)
        if (haveSize.length === 0) {
            haveSize = product.size// Mantener las tallas existentes si no se seleccionan nuevas
        }
        // Objeto para actualizar el producto
        const updateProduct = {
            ... product._doc,    
            name: req.body.name || product.name,
            description: req.body.description || product.description,
            image: req.body.image || product.image,
            category: req.body.category || product.category,
            size: haveSize.length ? haveSize : product.size, // Mantener las tallas existentes si no se seleccionan nuevas
            price: req.body.price || product.price
        }
        await Product.findOneAndUpdate({_id: _id} , updateProduct, { new: true })
        console.log(updateProduct)
        res.redirect("/dashboard")
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to edit the product"})
    }
})

// Eliminar un producto. Utilizamos el metodo post ya que el metodo delete no esta soportado por HTML5
router.delete("/dashboard/:productId/delete", authMiddleware, async (req, res) => {
    try {
        const id = req.params.productId;
        await Product.findByIdAndDelete(id);
        //res.status(200).json({ message: "Product deleted successfully" });
        res.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error to delete product" });
    }
})

module.exports = router

