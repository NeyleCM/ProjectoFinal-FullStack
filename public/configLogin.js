const express = require("express");
const path = require("path")
const admin = require("firebase-admin")
const app = express();
require("dotenv").config()

const authMiddleware = require("./middlewares/authMiddleware.js")
const errorHandler = require('./middlewares/errorHandler.js');//Middleware global
const serviceAccount = require("./config/serviceAccount.js")
const dbConnection = require("./config/db.js");
const cookieParser = require("cookie-parser")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const productRoutes = require("./routes/productRoutes.js");
const authRoutes = require("./routes/authRoutes.js")
const PORT = process.env.PORT || 3000;
// Middleware
//app.use(cors());  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser())

// Rutas
app.use("/", productRoutes);
app.use("/", authMiddleware, authRoutes);
app.use((req, res) => res.json({"Error 404": "Page not found"}))

// Conexión a la base de datos
dbConnection();

// Middleware global para manejo de errores
app.use(errorHandler); 

app.listen(PORT, () => console.log
(`La aplicación está escuchando en el puerto http://localhost:${PORT}`))