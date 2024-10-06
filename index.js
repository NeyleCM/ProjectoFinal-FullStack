const express = require("express");
const app = express();
const dbConnection = require("./config/config");
const productRoutes = require("./routes/products");
const cors = require("cors"); 

require('dotenv').config();


const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());  // Habilita CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexión a la base de datos
dbConnection();

// Rutas
app.use("/api", productRoutes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});