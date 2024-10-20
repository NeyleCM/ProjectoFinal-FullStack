# ProjectBreak_Modulo2

## Descripción del Proyecto
Es una aplicación web que permite gestionar productos de una tienda online. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los productos, autenticación de usuarios mediante Firebase. Esta aplicación está diseñada para ser escalable y fácil de mantener.

## Estructura de archivos de la aplicación:

── config
    ├── db.js                     // Código para la conexión a la base de datos MongoDB
    ├── serviceAccount.js         // Configuración de Firebase para la autenticación de usuarios

── controllers
    ├── productController.js       // Controlador para manejar la lógica de productos
    ├── authController.js          // (BONUS) Controlador para manejar la lógica de autenticación de usuarios

── docs
    ├── basicInfo.js               // Información básica de la API para Swagger
    ├── components.js              // Esquema de los componentes de la API (como Product)
    ├── endPoints.js               // Definición de los endpoints documentados en Swagger
    ├── index.js                   // Unificación de todas las configuraciones de Swagger

── middlewares
    ├── authMiddleware.js          // Middleware para la autenticación de usuarios

── models
    ├── Product.js                 // Modelo de producto con sus campos

── routes
    ├── productRoutes.js           // Rutas para gestionar productos
    ├── authRoutes.js              // Rutas para gestionar la autenticación de usuarios

── index.js                       // Servidor principal, conexión a la base de datos, unificación de Swagger y resto de la aplicación

── test                           // Pruebas unitarias
    ├── productController.test.js  // Pruebas para el controlador de productos

── public                         // Archivos estáticos
    ├── chaceSizeController.js     // Controlador para manejar la selección de tallas en el formulario de creación/edición de productos
    ├── styles.css                 // Estilos CSS para la aplicación
    ├── images                     // Carpeta para imágenes de productos
    ├── configLogin.js             // Configuración y lógica para manejar el inicio de sesión de usuarios

── .env                           // Variables de entorno, incluyendo la MONGO_URI para la base de datos

── package.json                   // Información del proyecto y dependencias

## Tecnologías Utilizadas
- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express**: Framework para crear aplicaciones web en Node.js.
- **Mongoose**: ODM para MongoDB que permite interactuar con la base de datos de manera sencilla.
- **Firebase**: Para autenticación de usuarios.
- **MongoDB**: Base de datos NoSQL donde se almacenan los productos.
- **Swagger**: Documentación de API.
- **HTML/CSS**: Para el desarrollo del frontend.
- **JavaScript**: Lenguaje de programación utilizado en la lógica de la aplicación.

## Endpoints de la API
- **POST /dashboard**: Endpoint para crear un nuevo producto.
- **GET /dashboard**: Endpoint para obtener todos los productos.
- **GET /dashboard/:id**: Endpoint para obtener un producto específico por ID.
- **PUT /dashboard/:id**: Endpoint para actualizar un producto por ID.
- **DELETE /dashboard/:id**: Endpoint para eliminar un producto por ID.
- **POST /auth/login**: Endpoint para autenticar a un usuario.
- **POST /auth/logout**: Endpoint para cerrar sesión de un usuario.

## Middleware de Autenticación

El archivo authMiddleware.js verifica los tokens de autenticación de Firebase. Este middleware se asegura de que solo los usuarios autenticados puedan acceder a ciertas rutas de la aplicación.

## Documentación de la API con Swagger
La documentación de la API está generada con Swagger. Esta permite visualizar y probar los endpoints de forma interactiva. La configuración se encuentra en la carpeta docs.

## Dependencias 

- **express**: Framework web para Node.js.
- **mongoose**: ODM para MongoDB.
- **firebase-admin**: SDK para interactuar con Firebase.
- **cookie-parser**: Middleware para manejar cookies.
- **dotenv**: Carga variables de entorno desde un archivo `.env`.
- **swagger-ui-express**: Para visualizar y probar la API usando Swagger.
- **jest**: Framework para realizar pruebas unitarias.
- **supertest**: Utilidad para realizar pruebas de integración para aplicaciones HTTP.
## Dependencias a Instalar
Utiliza el siguiente comando:

`npm install express mongoose firebase-admin cookie-parser dotenv swagger-ui-express jest supertest`

## Configuración

1. Clona el repositorio en tu máquina local.
2. Asegúrate de tener Node.js y MongoDB instalados.
3. Crea un archivo .env en la raíz del proyecto y agrega tus variables de entorno. Aquí tienes un ejemplo de las variables que puedes necesitar:


- **MONGO_URI**=<uri_de_mongodb>
- **FIREBASE_TYPE**=<tipo>
- **FIREBASE_PROJECT_ID**=<id_del_proyecto>
- **FIREBASE_PRIVATE_KEY_ID**=<id_de_la_clave_privada>
- **FIREBASE_PRIVATE_KEY**=<clave_privada>
- **FIREBASE_CLIENT_EMAIL**=<correo_cliente>
- **FIREBASE_CLIENT_ID**=<id_cliente>
- **FIREBASE_AUTH_URI**=<uri_autenticacion>
- **FIREBASE_TOKEN_URI**=<uri_token>
- **FIREBASE_AUTH_PROVIDER_X509_CERT_URL**=<certificado>
- **FIREBASE_CLIENT_X509_CERT_URL**=<certificado_cliente>
- **FIREBASE_UNIVERSE_DOMAIN**=<dominio_universo>

## Ejecución de la Aplicación
Para ejecutar la aplicación localmente, utiliza el siguiente comando:

`npm start`

## Despliegue
Para desplegar la aplicación en un entorno de producción, puedes utilizar Render. Aquí tienes el enlace a la plataforma de despliegue:

- `https://dashboard.render.com/`

## Enlace de render: 
- `https://projectbreak-modulo2-e11u.onrender.com/`

## Login
Para poder iniciar sesión y entrar en el login es necesario usar el siguiente usuario y contraseña:

- **Usuario**: prueba@gmail.com
- **Contraseña**: 123456
