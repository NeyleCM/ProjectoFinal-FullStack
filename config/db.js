const mongoose = require("mongoose");
require('dotenv').config();

const dbConnection = async () => {
  try {
    console.log("Ya se ha conectado la BBDD")
    await mongoose.connect(process.env.MONGO_URI)

  } catch (err) {
    console.error("No se ha podido conectar a la BBDD: ", err)
  }
}

module.exports = dbConnection