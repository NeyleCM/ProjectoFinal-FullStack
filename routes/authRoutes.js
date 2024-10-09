const express = require("express")
const router = express.Router()
const Product = require("../models/Product.js")
const { productsTemplate, productIdTemplate, createProductTemplate} = require("../controllers/productController.js")

// Mostrar todos los productos en el Dashboard
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

// Mostrar el formulario para crear un nuevo producto
router.post("/dashboard/new", async (req, res) => {
    try {
        const template = createProductTemplate();
        res.status(200).send(template);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error to show the form" });
    }
})

// Crear un nuevo producto
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

// Ver detalles de un producto específico en el Dashboard
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

// Mostrar el formulario para editar un producto
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

// Actualizar un producto
router.put("/dashboard/:productId", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

// Eliminar un producto
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


router.get("/dashboard/camisetas", async (req, res) => {
    try {
        const products = await Product.find({ category: "camisetas" });
        const template = productsTemplate("Camisetas", products);
        res.status(200).send(template);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving camisetas" });
    }
});

router.get("/dashboard/zapatos", async (req, res) => {
    try {
        const products = await Product.find({ category: "zapatos" });
        const template = productsTemplate("Zapatos", products);
        res.status(200).send(template);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving zapatos" });
    }
});

router.get("/dashboard/pantalones", async (req, res) => {
    try {
        const products = await Product.find({ category: "pantalones" });
        const template = productsTemplate("Pantalones", products);
        res.status(200).send(template);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving pantalones" });
    }
});

router.get("/dashboard/accesorios", async (req, res) => {
    try {
        const products = await Product.find({ category: "accesorios" });
        const template = productsTemplate("Accesorios", products);
        res.status(200).send(template);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving accesorios" });
    }
});

router.post("/dashboard/new", async (req, res) => {
    try {
        const template = createProductTemplate();
        res.status(200).send(template);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error showing the form" });
    }
});

router.post("/dashboard", async (req, res) => {
    try {
        const newProduct = await Product.create(req.body); // Crear un nuevo producto con los datos del cuerpo de la solicitud
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating the product" });
    }
});

router.get("/dashboard/:productId", async (req, res) => {
    try {
        const _id = req.params.productId;
        const product = await Product.findById(_id);
        const template = productIdTemplate(product);
        res.status(200).send(template);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving product by id" });
    }
});

module.exports = router