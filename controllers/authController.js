const navTemplate = 
`
    <nav>
        <a href="/dashboard">Productos</a>
        <a href="/dashboard/camisetas">Camisetas</a>
        <a href="/dashboard/pantalones">Pantalones</a>
        <a href="/dashboard/zapatos">Zapatos</a>
        <a href="/dashboard/accesorios">Accesorios</a>
        <a href="/dashboard/new">New Product</a>
        <a href="/dashboard/logout">Logout</a>
    </nav>
`

const authDasboardCntr = (name, obj) => {
    const template = `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Productos</title>
            <link rel="stylesheet" href="../public/styles.css">
        </head>
        <body>
            <main>
                ${navTemplate}
                <section>
                    <h1>${name}</h2>
                    <ol>
                        ${obj.map(element => {
                            const templateElement = 
                            `
                                <li>
                                    <h2>${element.name}
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
    const template = `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Productos</title>
            <link rel="stylesheet" href="../public/styles.css">
        </head>
        <body>
            <main>
                ${navTemplate}
                <section>
                    <h1>${obj.name}</h2>
                    <img src="${obj.image}"/>
                    <p>${obj.description}</p>
                    <span>${obj.price}€</span>
                    <p>Categoria: ${obj.category}</p>
                    <span>Tallas disponibles: ${obj.size.map(element => element).join(" | ")}</span>
                    <a href="/dashboard/${obj._id}/edit">Editar</a>
                    <form action="/dashboard/${obj._id}/delete" method="delete">
                        <button type="submit">Eliminar</button>
                    </form>
                </section>
            </main>
        </body>
        </html>
    `;
    return template;
}

const createProductTemplate = () => {
    const template = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Create Product</title>
            <link rel="stylesheet" href="../public/styles.css">
        </head>
        <body>
            <main>
                ${navTemplate}
                <h1>Create a New Product</h1>
                <form action="/dashboard" method="POST">
                    <label for="name">Product Name:</label>
                    <input type="text" id="name" name="name" required>
                    
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" required></textarea>
                    
                    <label for="price">Price:</label>
                    <input type="number" id="price" name="price" required>
                    
                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" required>
                    
                    <label for="image">Image URL:</label>
                    <input type="url" id="image" name="image" required>

                    <label for="size">Size:</label>
                    <input type="text" id="size" name="size" required>

                    <button type="submit">Create Product</button>
                </form>
            </main>
        </body>
        </html>
    `;

    return template;
};

module.exports = {
    authDasboardCntr,
    authIdTemplate,
    createProductTemplate
};