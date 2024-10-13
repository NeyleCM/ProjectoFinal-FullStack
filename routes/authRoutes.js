const express = require("express")
const router = express.Router()
const Product = require("../models/Product.js")
const { authDasboardCntr, authIdTemplate, createProductTemplate, editProductTemplate, loginTemplate } = require("../controllers/authController.js")
const sizeArray = ["xs", "s", "m", "l", "xl", "xxl", 39, 40, 41, 42, 43, 44]

// Mostrar todos los productos en el Dashboard
router.get("/dashboard", async (req, res) => {
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

router.get("/dashboard/new", async (req, res) => {
    try {
        const template = createProductTemplate();
        res.status(200).send(template); //Aqui hay que hacer un formulario donde realizamos el nuevo producto
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error to show the form" });
    }
})

// Crear un nuevo producto
router.post("/dashboard", async (req, res) => {
    try {
        //console.log([req.body.xs.id, req.body.s, req.body.m, req.body.l, req.body.xl, req.body.xxl])
        const haveSize = []

        sizeArray.forEach(element => {
            if(req.body[element] == "on"){
                haveSize.push(element)
            }
        })
        const newProduct = await Product.create({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            category: req.body.category,
            size: haveSize,
            price: req.body.price
        })
        const product = await Product.create(newProduct)
        //res.status(201).json(product)
        res.redirect("/dashboard")
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to create the product"})
    }
})

// Ver detalles de un producto específico en el Dashboard
router.get("/dashboard/:productId", async (req, res) => {
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
router.get("/dashboard/:productId/edit", async (req, res) => {
    try {
        const id = req.params.productId;
        const product = await Product.findById(id);
        const template = editProductTemplate(id)
        res.status(200).send(template);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error to show the edit form" });
    }
})

// Actualizar un producto
router.post("/dashboard/:productId", async (req, res) => {
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
            name: req.body.name || this.name,
            description: req.body.description || this.description,
            image: req.body.image || this.image,
            category: req.body.category || this.category,
            size: haveSize,
            price: req.body.price || this.price
        }
        await Product.findOneAndUpdate({_id: _id} , updateProduct, { new: true })
        console.log(updateProduct)
        const updated = await Product.updateOne()
        res.redirect("/dashboard")
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error to edit the product"})
    }
})

// Eliminar un producto. Utilizamos el metodo post ya que el metodo delete no esta soportado por HTML5
router.delete("/dashboard/:productId/delete", async (req, res) => {
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

