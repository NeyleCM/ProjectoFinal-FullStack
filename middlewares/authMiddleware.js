const adminFirebase = require('firebase-admin'); //Verificar los tokens de autenticación

//Verificar si el usuario tiene un token de autenticación válido
const authMiddleware = async (req, res, next) => {
    try {
        const tokenCokie = req.cookies.token
        if(tokenCokie){
            const decodedToken = await adminFirebase.auth().verifyIdToken(tokenCokie);//verifyIdToken decodifica y valida el token. Si es válido devuelve el token decodificado con información del usuario autenticado
        
            if (!decodedToken) { //Si no se encuentra el token (el header 'authorization' está ausente o mal formado)
                req.cookies.remove(token)
                return res.status(401).send(`
                    <h1>Unauthorized access</h1>
                    <a href="/products/login">Login</a>
                    `);
            }
            
            next(); // Usuario autenticado, pasa al sig midlleware o ruta
        }   
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(401).send(`
            <h1>Invalid or missing token</h1>
            <a href="/products/login">Login</a>
        `); //Si el token es inválido o no fue proporcionado correctamente  
    }
};

module.exports = authMiddleware;
