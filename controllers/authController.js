const navTemplate = 
`
    <nav>
        <div>
            <a href="/dashboard">Productos</a>
            <a href="/dashboard/camisetas">Camisetas</a>
            <a href="/dashboard/pantalones">Pantalones</a>
            <a href="/dashboard/zapatos">Zapatos</a>
            <a href="/dashboard/accesorios">Accesorios</a>
            <a href="/dashboard/new">New Product</a>
            <a href="/dashboard/logout">Logout</a>
        </div>
    </nav>
`

const doctype = 
`   <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Productos</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
`
    //<link rel="stylesheet" href="../public/styles.css">

const authDasboardCntr = (name, obj) => {
    const template = `
        ${doctype}
            <body>
                ${navTemplate}  
                <main>
                    <section>
                        <h1>${name}</h1>
                        <ol>
                            ${obj.map(element => {
                                const templateElement = 
                                `
                                    <li>
                                        <h2>${element.name}</h2>
                                        <img src=${element.image} />
                                        <a href="/dashboard/${element._id}">Ver</a>
                                    </li>
                                `
                                return templateElement
                            }).join("")}
                        </ol>
                    </section>
                </main>
            </body>
        </html>
    `;
    return template;
}

const authIdTemplate = (obj) => {
    const template = `
        ${doctype}
            <body>
            ${navTemplate}
                <main>
                    <section class="productid">
                        <h1>${obj.name}</h1>
                        <img src="${obj.image}"/>
                        <p>${obj.description}</p>
                        <span>${obj.price}€</span>
                        <p>Categoria: ${obj.category}</p>
                        <span>Tallas disponibles: ${obj.size.map(element => element).join(" | ")}</span>
                        <div>
                            <a href="/dashboard/${obj._id}/edit">Editar</a>
                            <form action="/dashboard/${obj._id}/delete" method="post">
                                <button type="submit">Eliminar</button>
                            </form>
                            <a href="/dashboard">Volver</a>
                        </div>
                    </section>
                </main>
            </body>
        </html>
    `;
    return template;
}

const createProductTemplate = () => {
    const template = `
    ${doctype}
            <body>
                ${navTemplate}
                <main> 
                    <h1>Crear un nuevo producto</h1>
                    <form action="/dashboard" method="POST">
                        <label for="name">Nombre del producto:</label>
                        <input type="text" id="name" name="name" required>
                        
                        <label for="description">Descripción:</label>
                        <textarea id="description" name="description" required></textarea>
                        
                        <label for="price">Precio:</label>
                        <input type="number" id="price" name="price" required>
                        
                        <label for="category">Categoría:</label>
                        <select id="category" name="category" required>
                            <option value="camisetas">Camisetas</option>
                            <option value="pantalones">Pantalones</option>
                            <option value="zapatos">Zapatos</option>
                            <option value="accesorios">Accesorios</option>
                        </select>
                        
                        <label for="image">URL de la imagen:</label>
                        <input type="url" id="image" name="image" required>


                        <label for="size">Talla:</label>
                        <div id="sizeController"></div>

                        <button type="submit">Crear producto</button>
                        
                    </form>
                </main>
                <script src="/chaceSizeController.js"></script>
            </body>
        </html>
    `;
//<script src="../scripts/chaceSizeController.js"></script>
    return template;
};

const editProductTemplate = (product) => {
    const template = 
    `
        ${doctype}
            <body>
            ${navTemplate}
                <main>
                    <form action="/dashboard/${product._id}" method="POST">
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" name="name" value=""> 
                        
                        <label for="description">Descripción:</label>
                        <textarea id="description" name="description"></textarea> 
                        
                        <label for="price">Precio:</label>
                        <input type="number" id="price" name="price" value="">
                        
                        <label for="category">Categoría:</label>
                        <select id="category" name="category">
                            <option value="camisetas">Camisetas</option>
                            <option value="pantalones">Pantalones</option>
                            <option value="zapatos">Zapatos</option>
                            <option value="accesorios">Accesorios</option>
                        </select>
                        
                        <label for="image">URL imagen:</label>
                        <input type="url" id="image" name="image" value=""> 

                        <label for="size">Talla:</label>
                        <div id="sizeController"></div>

                        <button type="submit">Edit Product</button>
                    </form>
                </main>
                <script src="/chaceSizeController.js"></script>
            </body>
        </html>
    `;
    return template;
};


module.exports = {
    authDasboardCntr,
    authIdTemplate,
    createProductTemplate,
    editProductTemplate,
};

//prueba