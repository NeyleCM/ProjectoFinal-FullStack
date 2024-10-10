const express = require("express");
const app = express();
const dbConnection = require("./config/db.js");
const productRoutes = require("./routes/productRoutes.js");
const authRoutes = require("./routes/authRoutes.js")
const path = require("path")

const PORT = process.env.PORT || 3000;

// Middleware
//app.use(cors());  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

// Rutas
app.use("/", productRoutes);
app.use("/", authRoutes);

// Conexión a la base de datos
dbConnection();

app.listen(PORT, () => console.log
(`La aplicación está escuchando en el puerto http://localhost:${PORT}`))