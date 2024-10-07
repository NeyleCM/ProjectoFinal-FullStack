const express = require("express");
const app = express();
const dbConnection = require("./config/db.js");
const productRoutes = require("./routes/productRoutes.js");
const authRoutes = require("./routes/authRoutes.js")

require('dotenv').config();


const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexión a la base de datos
dbConnection();

// Rutas
app.use("/", productRoutes);
app.use("/", authRoutes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});