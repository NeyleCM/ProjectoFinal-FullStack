const navTemplate = `    
    <nav>
        <div>
            <a href="/products">Productos</a>
            <a href="/products/camisetas">Camisetas</a>
            <a href="/products/pantalones">Pantalones</a>
            <a href="/products/zapatos">Zapatos</a>
            <a href="/products/accesorios">Accesorios</a>
            <a href="/products/login">Login</a>
        </div>
    </nav>
`
const doctype = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
    <link rel="stylesheet" href="/styles.css">
</head>
`
const productsTemplate = (name, obj) => {
    const template = `
        ${doctype}
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
    const template = `
        ${doctype}
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

const loginTemplate = () => {
    const template = `
        ${doctype}
        <body>
            <main>
                <section>
                    <h1>Iniciar Sesión</h1>
                        <div>
                            <label for="email">Correo Electrónico</label>
                            <input type="email" id="email" name="email" placeholder="ejemplo@gmail.com" required />
                        </div>
                        <div>
                            <label for="password">Contraseña</label>
                            <input type="password" id="password" name="password" placeholder="Introduce tu contraseña" required />
                        </div>
                        <div id="mensaje"></div>
                        <button id="loginButton">Iniciar Sesión</button>
                </section>
            </main>
            <script type="module" src="/configLogin.js"></script>
        </body>
        </html>
    `;
    return template;
}

module.exports = {
    productsTemplate,
    productIdTemplate,
    loginTemplate
}