
// OBJETO

class producto {
        constructor (id, nombre, autor, imagen, precio, categoria, xAgregado, xHistorialAgregado) {
          this.id = id;
          this.nombre = nombre;
          this.autor = autor;
          this.imagen = imagen;
          this.precio = precio;
          this.categoria = categoria;
          this.xAgregado = xAgregado;
          this.xHistorialAgregado = xHistorialAgregado;
        }
}


// ARRAYS

const productosStock = [
        new producto (1, "After Hours", "The Weeknd", "./assets/img/afterhours.png", 9500, "vinilos", 0, 0),
        new producto (2, "Midnights", "Taylor Swift", "./assets/img/midnights.png", 12000, "vinilos", 0, 0),
        new producto (3, "Mr. Morale & the Big Steppers", "Kendrick Lamar", "./assets/img/mrmorale.png", 10000, "vinilos", 0, 0),
        new producto (4, "Future Nostalgia", "Dua Lipa", "./assets/img/futurenostalgia.png", 7500, "vinilos", 0, 0),
        new producto (5, "Superache", "Conan Gray", "./assets/img/superache.png", 9900, "vinilos", 0, 0),
        new producto (6, "RENAISSANCE", "Beyoncé", "./assets/img/renaissance.png", 13000, "vinilos", 0, 0),
        new producto (7, "Sour", "Olivia Rodrigo", "./assets/img/sour.png", 3500, "vinilos", 0, 0),
        new producto (8, "Gemini Rights", "Steve Lacy", "./assets/img/geminirights.png", 6700, "vinilos", 0, 0),
        new producto (9, "Harry's House", "Harry Styles", "./assets/img/harryshouse.png", 21650, "vinilos", 0, 0),
        new producto (10, "MOTOMAMI", "ROSALÍA", "./assets/img/motomami.png", 8700, "vinilos", 0, 0),
        new producto (11, "Happier Than Ever", "Billie Eilish", "./assets/img/happierthanever.png", 8600, "vinilos", 0, 0),

        new producto (12, "Chemtrails Over the Country Club", "Lana del Rey", "./assets/img/chemtrailsoverthecountryclub-cassette.png", 50000, "cassettes", 0, 0),
        new producto (13, "Bleach", "Nirvana", "./assets/img/bleach-cassette.png", 23000, "cassettes", 0, 0),
        new producto (14, "The Lockdown Sessions", "Elton John", "./assets/img/thelockdownsessions-cassette.png", 48000, "cassettes", 0, 0),
        new producto (15, "Harry's House", "Harry Styles", "./assets/img/harryshouse-cassette.png", 55000, "cassettes", 0, 0),
        new producto (16, "Happier Than Ever", "Billie Eilish", "./assets/img/happierthanever-cassette.png", 35000, "cassettes", 0, 0),
        new producto (17, "Greatest Hits", "Queen", "./assets/img/greatesthits-cassette.png", 25000, "cassettes", 0, 0),
        new producto (18, "Sucking In The Seventies", "The Rolling Stones", "./assets/img/suckingintheseventies-cassette.png", 10500, "cassettes", 0, 0),
        new producto (19, "YHLQMDLG", "Bad Bunny", "./assets/img/yhlqmdlg-cassette.png", 30000, "cassettes", 0, 0),

        new producto (20, "Call Me If You Get Lost", "Tyler, The Creator", "./assets/img/callmeifyougetlost.jpg", 9900, "cds", 0, 0),
        new producto (21, "DISCO", "Kylie Minogue", "./assets/img/DISCO.jpg", 6800, "cds", 0, 0),
        new producto (22, "Back to Black", "Amy Winehouse", "./assets/img/backtoblack.jpg", 4500, "cds", 0, 0),
        new producto (23, "Legacy", "David Bowie", "./assets/img/legacy.jpg", 2300, "cds", 0, 0),
        new producto (24, "Thriller", "Michael Jackson", "./assets/img/thriller.jpg", 7900, "cds", 0, 0),
        new producto (25, "Rumours", "Fleetwood Mac", "./assets/img/rumours.jpeg", 6700, "cds", 0, 0),
        new producto (26, "The Slow Rush", "Tame Impala", "./assets/img/theslowrush.jpg", 5000, "cds", 0, 0),
        new producto (27, "30", "Adele", "./assets/img/30.jpg", 10500, "cds", 0, 0),

        new producto (28, "Me", "Elton John", "./assets/img/me-book.png", 6500, "libros", 0, 0),
        new producto (29, "Paracaidas y Vueltas", "Andrés Calamaro", "./assets/img/paracaidasyvueltas-book.png", 3500, "libros", 0, 0),
        new producto (30, "Chronicles Vol. 1", "Bob Dylan", "./assets/img/chroniclesvol1-book.png", 4100, "libros", 0, 0),
        new producto (31, "Born To Run", "Bruce Springsteen", "./assets/img/borntorun-book.png", 3100, "libros", 0, 0)
];

let productosCarrito = [];

let productosMasAgregados = [];


// ELEMENTOS DE HTML - CONSTANTES

const MONTO_MINIMO_ENVIO_GRATIS = 15000;
const COSTO_ENVIO_DEFAULT = 1200;

const populares = document.getElementById("populares");
const vinilos = document.getElementById("vinilos");
const cassettes = document.getElementById("cassettes");
const cds = document.getElementById("cds");
const libros = document.getElementById("libros");
const categoriasProductos = [populares, vinilos, cassettes, cds, libros];

const seccionProductos = document.getElementById("productos");
const seccionRecomendaciones = document.getElementById("recomendaciones");
const carrito = document.getElementById("cart");
const seccionCarrito = document.getElementById("carrito");
const openCarrito = document.getElementById("open-cart");
const closeCarrito = document.getElementById("exit-cart");
const botonComprar = document.getElementById("purchase");
const verMasProd = document.getElementById("view-more");
const carritoVacio = document.getElementById("empty");
const total = document.getElementById("total");
const subtotal = document.getElementById("subtotal");
const envio = document.getElementById("envio");



// CARRITO

function sumar_total () {
        let suma_productos = 0;
        if (productosCarrito.length != 0) {
                productosCarrito.forEach(agregado => suma_productos += (agregado.precio) * (agregado.xAgregado));
        }
        return suma_productos;
}

function aviso_compra () {
        alert("Perfecto! Compra realizada.");
}

function rechazo_compra () {
        alert("No agregaste nada al carrito.");
}


const agregar_producto = (index) => {
        if (productosCarrito.length == 0) {
                carritoVacio.style.display = "none";
                botonComprar.removeEventListener('click', rechazo_compra);
                botonComprar.addEventListener('click', aviso_compra);
        }
        productosStock[index].xAgregado++;
        productosStock[index].xHistorialAgregado++;
        botonComprar.style.background = "linear-gradient(98.81deg, var(--mostaza) -0.82%, var(--marron) 101.53%)";
        productosCarrito = productosStock.filter(agregado => agregado.xAgregado > 0);
        productosMasAgregados = productosStock.filter(agregado => agregado.xHistorialAgregado > 0);
};

const eliminar_producto = (producto, index) => {
        if (productosStock[index].xAgregado == 1) {
                if (confirm (`Se eliminará ${producto.nombre} del carrito`)) {
                        productosStock[index].xAgregado--;
                }
        }
        else {
                productosStock[index].xAgregado--;
        }
        productosCarrito = productosStock.filter(agregado => agregado.xAgregado > 0);
        if (productosCarrito.length == 0) {
                carritoVacio.style.display = "block";
                botonComprar.style.background = "gray";
                botonComprar.removeEventListener('click', aviso_compra);
                botonComprar.addEventListener('click', rechazo_compra);
        }
};

const actualizar_carrito = (producto, accion) => {
        let costoEnvio = 0;
        let indexModificado = productosStock.find(modificado => modificado.id == producto.id).id - 1;
        switch (accion) {
                case "agregar":
                        agregar_producto (indexModificado);
                        break;
                case "eliminar":
                        eliminar_producto (producto, indexModificado);
                        break;
        }
        subtotal.innerHTML = "$ " + sumar_total();
        if ((sumar_total() < MONTO_MINIMO_ENVIO_GRATIS) && (sumar_total() > 0)) {
                envio.innerHTML = "$ " + COSTO_ENVIO_DEFAULT;
                costoEnvio = COSTO_ENVIO_DEFAULT;
        }
        else {
                envio.innerHTML = "Gratis";
                costoEnvio = 0;
        }
        total.innerHTML = "$ " + (costoEnvio + sumar_total());
        localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));
        localStorage.setItem('productosMasAgregados', JSON.stringify(productosMasAgregados));
};


// RENDER

const mostrar_producto = (seccion, producto) => {
        seccion.innerHTML = seccion.innerHTML + `
                <div class="cards-${seccion.id}">
			<img src="${producto.imagen}" alt="imagen-prod-${producto.id}" class="${seccion.id}-imgs">
                        <div class="datos-prod">
                                <div class="info-prod">
                                        <p class="nombre-prod">${producto.nombre}</p>
                                        <p class="autor-${seccion.id}">${producto.autor}</p>
                                        <p class="precio-prod">$${producto.precio}</p>
                                </div>
                                <div class="controles-prod">
                                        <button class="${seccion.id}-btns-rmv card-btn" id="${seccion.id}-${producto.id}-rmv">-</button>
                                        <span class="${seccion.id}-count" id="${seccion.id}-${producto.id}-cant"></span>
                                        <button class="${seccion.id}-btns-add card-btn" id="${seccion.id}-${producto.id}">AGREGAR</button>
                                </div>
                        </div>
		</div>
                `;
};


function filtrar_productos (categoria) {
        let productos_para_mostrar = [];
        if (categoria == "populares") {
                if (!JSON.parse(localStorage.getItem('productosMasAgregados'))) {
                        productos_para_mostrar = productosStock.slice(0,8);
                }
                else {
                        if (JSON.parse(localStorage.getItem('productosMasAgregados')).length < 8) {
                                productos_para_mostrar = productosStock.slice(0,8);
                        }
                        else {
                                productos_para_mostrar = JSON.parse(localStorage.getItem('productosMasAgregados')).sort((prod1, prod2) => prod2.xHistorialAgregado - prod1.xHistorialAgregado);
                                console.log(productos_para_mostrar);
                                productos_para_mostrar = productos_para_mostrar.slice(0,8);
                        }
                }
        }
        else {
                productos_para_mostrar = productosStock.filter ((producto) => producto.categoria == categoria);
        }
        seccionProductos.innerHTML = "";
        productos_para_mostrar.forEach ((producto) => mostrar_producto(seccionProductos, producto));
        return productos_para_mostrar;
}


function render_recomendaciones () {
        let productosRecomendados = [productosStock[0], productosStock[1], productosStock[2]];
        return productosRecomendados;
}


const activar_botones_renderizados = (productos, seccion) => {
        let botones_productos = [];
        let botones_carrito_add = [];
        let botones_carrito_elim = [];
        productos.forEach (producto => {
                botones_productos[productos.indexOf(producto)] = document.getElementById(seccion + "-" + producto.id);
                botones_productos[productos.indexOf(producto)].addEventListener('click', () => {
                        actualizar_carrito(productosStock.find(stock => stock.id == producto.id), "agregar");
                        alert(`Agregaste ${producto.nombre} al carrito!`);
                        render_productos ("carrito");
                });
        });
        if (productosCarrito.length > 0) {
                productosCarrito.forEach (producto => {
                        botones_carrito_elim[productosCarrito.indexOf(producto)] = document.getElementById("carrito-" + producto.id + "-rmv");
                        botones_carrito_elim[productosCarrito.indexOf(producto)].addEventListener('click', () => {
                                actualizar_carrito(productosCarrito.find(stock => stock.id == producto.id), "eliminar");
                                render_productos ("carrito");
                        });
                        botones_carrito_add[productosCarrito.indexOf(producto)] = document.getElementById("carrito-" + producto.id);
                        botones_carrito_add[productosCarrito.indexOf(producto)].innerHTML = "+";
                        botones_carrito_add[productosCarrito.indexOf(producto)].addEventListener('click', () => {
                                actualizar_carrito(productosCarrito.find(stock => stock.id == producto.id), "agregar");
                                render_productos ("carrito");
                        });
                });
        }
};


const render_productos = (seccion, categoria) => {
        let productos_renderizados = [];
        switch (seccion) {
                case "recomendaciones":
                        productos_renderizados = render_recomendaciones ();
                        productos_renderizados.forEach ((producto) => mostrar_producto(seccionRecomendaciones, producto));
                        break;
                case "carrito":
                        seccionCarrito.innerHTML = "";
                        productosCarrito.forEach((producto) => {
                                mostrar_producto (seccionCarrito, producto);
                                let cantidad_carrito = document.getElementById("carrito-" + producto.id + "-cant");
                                cantidad_carrito.innerHTML = producto.xAgregado;
                        });
                        break;
                default:
                        if (!categoria) {
                                productos_renderizados = filtrar_productos("populares");
                        }
                        else {
                                productos_renderizados = filtrar_productos(categoria);
                        }
                        break;
        }
        activar_botones_renderizados (productos_renderizados, seccion);
};

const inicializar_agregados = () => {
        let indexModificado = 0;
        let prodsEnCarrito = JSON.parse(localStorage.getItem('productosCarrito'));
        let prodsFavoritos = JSON.parse(localStorage.getItem('productosMasAgregados'));
        if (prodsFavoritos.length > 0) {
                prodsFavoritos.forEach((producto) => {
                        indexModificado = productosStock.find((modificado) => modificado.id == producto.id).id - 1;
                        productosStock[indexModificado].xHistorialAgregado = producto.xHistorialAgregado;
                });
        }
        if (prodsEnCarrito.length > 0) {
                prodsEnCarrito.forEach((producto) => {
                        indexModificado = productosStock.find((modificado) => modificado.id == producto.id).id - 1;
                        productosStock[indexModificado].xAgregado = producto.xAgregado - 1;
                        productosStock[indexModificado].xHistorialAgregado--;
                        actualizar_carrito (productosStock[indexModificado], "agregar");
                });
        }
        console.log(prodsEnCarrito);
        console.log(prodsFavoritos);
}

/**********************************************/

const init = () => {
        render_productos ("productos");
        render_productos ("recomendaciones");
        inicializar_agregados ();
        render_productos ("carrito");
        categoriasProductos.forEach ((categoria) => {
                categoria.addEventListener('click', () => {
                        categoriasProductos.forEach((cat) => cat.classList.remove("cat-selected"));
                        categoria.classList.add("cat-selected");
                        productos_mostrados = render_productos("productos", categoria.id);
                })
        });
        openCarrito.addEventListener('click', () => carrito.classList.remove("invisible"));
        closeCarrito.addEventListener('click', () => carrito.classList.add("invisible"));
        verMasProd.addEventListener('click', () => carrito.classList.add("invisible"));
        botonComprar.addEventListener('click', rechazo_compra);
};


localStorage.setItem('productosStock', JSON.stringify(productosStock));

init();