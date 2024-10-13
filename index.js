const express = require("express");
const app = express();
const dbConnection = require("./config/db.js");
const path = require("path")
//const admin = require("firebase-admin")
const serviceAccount = require("./config/serviceAccount.js")
const PORT = process.env.PORT || 3000;
const cookieParser = require("cookie-parser")
require("dotenv").config()

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const productRoutes = require("./routes/productRoutes.js");
const authRoutes = require("./routes/authRoutes.js")
// Middleware
//app.use(cors());  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser())

// Rutas
app.use("/", productRoutes);
app.use("/", authRoutes);
app.use((req, res) => res.json({"Error 404": "Page not found"}))

// Conexión a la base de datos
dbConnection();

app.listen(PORT, () => console.log
(`La aplicación está escuchando en el puerto http://localhost:${PORT}`))