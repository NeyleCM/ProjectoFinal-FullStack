const navTemplate = 
`
    <nav>
        <a href="#">Productos</a>
        <a href="#">Camisetas</a>
        <a href="#">Pantalones</a>
        <a href="#">Zapatos</a>
        <a href="#">Accesorios</a>
        <a href="#">Login</a>
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
                                    <button href="/">Ver</button>
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
                    <h1>${obj[0].name}</h2>
                    <img src="${obj[0].image}"/>
                    <p>${obj[0].description}</p>
                    <span>${obj[0].price}</span>
                    <p>Categoria: ${obj[0].category}</p>
                    <span>Tallas disponibles: ${obj[0].size.map(element => element).join(", ")}</span>
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