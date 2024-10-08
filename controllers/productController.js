const navTemplate = 
`
    <nav>
        <a href="/products">Productos</a>
        <a href="/products/camisetas">Camisetas</a>
        <a href="/products/pantalones">Pantalones</a>
        <a href="/products/zapatos">Zapatos</a>
        <a href="/products/accesorios">Accesorios</a>
        <a href="/dashboard/login">Login</a>
    </nav>
`


const productsTemplate = (name, obj) => {
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
                                    <a href="/products/${element._id}">Ver</a>
                                </li>
                            `
                            return templateElement
                        }).join("")}
                    </ol>
                </section>
            </main>
        </body>
        </html>
    `
    return template
}

const productIdTemplate = (obj) => {
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
                </section>
            </main>
        </body>
        </html>
    `
    return template
}

module.exports = {
    productsTemplate,
    productIdTemplate
}