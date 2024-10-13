const adminFirebase = require('firebase-admin'); //Verificar los tokens de autenticación

//Verificar si el usuario tiene un token de autenticación válido
const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];//Divide la cadena en dos partes y extrae solo el token, (?.) operador de encadenamiento para evitar errores

        if (!token) { //Si no se encuentra el token (el header 'authorization' está ausente o mal formado)
            return res.status(401).send("Unauthorized access");
        }
        const decodedToken = await adminFirebase.auth().verifyIdToken(token);//verifyIdToken decodifica y valida el token. Si es válido devuelve el token decodificado con información del usuario autenticado
        req.user = decodedToken; //Guarda el token decodificado en req.user
        next(); // Usuario autenticado, pasa al sig midlleware o ruta
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(401).send("Invalid or missing token"); //Si el token es inválido o no fue proporcionado correctamente
    }
};

module.exports = authMiddleware;