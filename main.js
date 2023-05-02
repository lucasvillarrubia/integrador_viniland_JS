
// OBJETO

class producto {
        constructor (id, nombre, autor, imagen, precio, categoria, xAgregado) {
          this.id = id;
          this.nombre = nombre;
          this.autor = autor;
          this.imagen = imagen;
          this.precio = precio;
          this.categoria = categoria;
          this.xAgregado = xAgregado;
        }
}


// ARRAYS

const productosStock = [
        new producto (1, "After Hours", "The Weeknd", "./assets/img/afterhours.png", 350, "vinilos", 0),
        new producto (2, "Midnights", "Taylor Swift", "./assets/img/midnights.png", 380, "vinilos", 0),
        new producto (3, "Mr. Morale & the Big Steppers", "Kendrick Lamar", "./assets/img/mrmorale.png", 450, "vinilos", 0),
        new producto (4, "Future Nostalgia", "Dua Lipa", "./assets/img/futurenostalgia.png", 750, "vinilos", 0),
        new producto (5, "Superache", "Conan Gray", "./assets/img/superache.png", 990, "vinilos", 0),
        new producto (6, "RENAISSANCE", "Beyoncé", "./assets/img/renaissance.png", 10, "vinilos", 0),
        new producto (7, "Sour", "Olivia Rodrigo", "./assets/img/sour.png", 350, "vinilos", 0),
        new producto (8, "Gemini Rights", "Steve Lacy", "./assets/img/geminirights.png", 0, "vinilos", 0),
        new producto (9, "Harry's House", "Harry Styles", "./assets/img/harryshouse.png", 3650, "vinilos", 0),
        new producto (10, "MOTOMAMI", "ROSALÍA", "./assets/img/motomami.png", 870, "vinilos", 0),
        new producto (11, "Happier Than Ever", "Billie Eilish", "./assets/img/happierthanever.png", 360, "vinilos", 0),

        new producto (12, "Chemtrails Over the Country Club", "Lana del Rey", "./assets/img/chemtrailsoverthecountryclub-cassette.png", 50000, "cassettes", 0),
        new producto (13, "Bleach", "Nirvana", "./assets/img/bleach-cassette.png", 23000, "cassettes", 0),
        new producto (14, "The Lockdown Sessions", "Elton John", "./assets/img/thelockdownsessions-cassette.png", 48000, "cassettes", 0),
        new producto (15, "Harry's House", "Harry Styles", "./assets/img/harryshouse-cassette.png", 55000, "cassettes", 0),
        new producto (16, "Happier Than Ever", "Billie Eilish", "./assets/img/happierthanever-cassette.png", 35000, "cassettes", 0),
        new producto (17, "Greatest Hits", "Queen", "./assets/img/greatesthits-cassette.png", 25000, "cassettes", 0),
        new producto (18, "Sucking In The Seventies", "The Rolling Stones", "./assets/img/suckingintheseventies-cassette.png", 10500, "cassettes", 0),
        new producto (19, "YHLQMDLG", "Bad Bunny", "./assets/img/yhlqmdlg-cassette.png", 30000, "cassettes", 0),
        new producto (20, "Call Me If You Get Lost", "Tyler, The Creator", "./assets/img/callmeifyougetlost.jpg", 9900, "cds", 0),
        new producto (21, "DISCO", "Kylie Minogue", "./assets/img/DISCO.jpg", 6800, "cds", 0),
        new producto (22, "Back to Black", "Amy Winehouse", "./assets/img/backtoblack.jpg", 4500, "cds", 0),
        new producto (23, "Legacy", "David Bowie", "./assets/img/legacy.jpg", 2300, "cds", 0),
        new producto (24, "Thriller", "Michael Jackson", "./assets/img/thriller.jpg", 7900, "cds", 0),
        new producto (25, "Rumours", "Fleetwood Mac", "./assets/img/rumours.jpeg", 6700, "cds", 0),
        new producto (26, "The Slow Rush", "Tame Impala", "./assets/img/theslowrush.jpg", 5000, "cds", 0),
        new producto (27, "30", "Adele", "./assets/img/30.jpg", 10500, "cds", 0),
        new producto (28, "Me", "Elton John", "./assets/img/me-book.png", 6500, "libros", 0),
        new producto (29, "Paracaidas y Vueltas", "Andrés Calamaro", "./assets/img/paracaidasyvueltas-book.png", 3500, "libros", 0),
        new producto (30, "Chronicles Vol. 1", "Bob Dylan", "./assets/img/chroniclesvol1-book.png", 4100, "libros", 0),
        new producto (31, "Born To Run", "Bruce Springsteen", "./assets/img/borntorun-book.png", 3100, "libros", 0)
];

let productosCarrito = [];

let productosRecomendados = [];


// ELEMENTOS DE HTML - CONSTANTES

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

const actualizar_carrito = (producto, accion) => {
        let costoEnvio = 0;
        let indexModificado = productosStock.find(modificado => modificado.id == producto.id).id - 1;
        switch (accion) {
                case "agregar":
                        if (productosCarrito.length == 0) {
                                carritoVacio.style.display = "none";
                                botonComprar.removeEventListener('click', rechazo_compra);
                                botonComprar.addEventListener('click', aviso_compra);
                        }
                        if (productosStock[indexModificado].xAgregado <= 0) {
                                productosCarrito.push(producto);
                        }
                        productosStock[indexModificado].xAgregado++;
                        botonComprar.style.background = "linear-gradient(98.81deg, var(--mostaza) -0.82%, var(--marron) 101.53%)";
                        break;
                case "eliminar":
                        if (productosStock[indexModificado].xAgregado == 1) {
                                if (confirm (`Se eliminará ${producto.nombre} del carrito`)) {
                                        productosStock[indexModificado].xAgregado--;
                                        productosCarrito = productosCarrito.filter(agregado => agregado.xAgregado > 0);
                                                // alert(`Sacaste un ${producto.nombre} del carrito!`);
                                }
                        }
                        else {
                                productosStock[indexModificado].xAgregado--;
                        }
                        if (productosCarrito.length == 0) {
                                carritoVacio.style.display = "block";
                                botonComprar.style.background = "gray";
                                botonComprar.removeEventListener('click', aviso_compra);
                                botonComprar.addEventListener('click', rechazo_compra);
                        }
                        break;
        }
        subtotal.innerHTML = "$ " + sumar_total();
        if ((sumar_total() < 9000) && (sumar_total() > 0)) {
                envio.innerHTML = "$ " + COSTO_ENVIO_DEFAULT;
                costoEnvio = COSTO_ENVIO_DEFAULT;
        }
        else {
                envio.innerHTML = "Gratis";
                costoEnvio = 0;
        }
        total.innerHTML = "$ " + (costoEnvio + sumar_total());
        localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));
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
                productos_para_mostrar = productosStock.filter ((producto) => producto.id <= 8);
        }
        else {
                productos_para_mostrar = productosStock.filter ((producto) => producto.categoria == categoria);
        }
        seccionProductos.innerHTML = "";
        productos_para_mostrar.forEach ((producto) => mostrar_producto(seccionProductos, producto));
        return productos_para_mostrar;
}


function render_recomendaciones () {
        productosStock.sort ((producto1, producto2) => producto2.xAgregado - producto1.xAgregado);
        productosRecomendados = [productosStock[0], productosStock[1], productosStock[2]];
        productosRecomendados.forEach ((producto) => mostrar_producto(seccionRecomendaciones, producto));
        return productosRecomendados;
}


const render_productos = (seccion, categoria) => {
        let productos_renderizados = [];
        let botones_productos = [];
        let botones_carrito_add = [];
        let botones_carrito_elim = [];
        switch (seccion) {
                case "recomendaciones":
                        productos_renderizados = render_recomendaciones ();
                        break;
                case "carrito":
                        seccionCarrito.innerHTML = "";
                        JSON.parse(localStorage.getItem('productosCarrito')).forEach((producto) => {
                                if (producto.xAgregado > 0) {
                                        mostrar_producto (seccionCarrito, producto);
                                        let cantidad_carrito = document.getElementById("carrito-" + producto.id + "-cant");
                                        cantidad_carrito.innerHTML = producto.xAgregado;
                                }
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
        productos_renderizados.forEach (producto => {
                botones_productos[productos_renderizados.indexOf(producto)] = document.getElementById(seccion + "-" + producto.id);
                botones_productos[productos_renderizados.indexOf(producto)].addEventListener('click', () => {
                        actualizar_carrito(productosStock.find(stock => stock.id == producto.id), "agregar");
                        alert(`Agregaste ${producto.nombre} al carrito!`);
                        render_productos ("carrito");
                });
        });
        if (productosCarrito.length > 0) {
                productosCarrito.forEach (producto => {
                        console.log("LLEGUÉ ACÁ TAMBIÉN");
                        botones_carrito_elim[productosCarrito.indexOf(producto)] = document.getElementById("carrito-" + producto.id + "-rmv");
                        botones_carrito_elim[productosCarrito.indexOf(producto)].addEventListener('click', () => {
                                actualizar_carrito(productosStock.find(stock => stock.id == producto.id), "eliminar");
                                render_productos ("carrito");
                        });
                        botones_carrito_add[productosCarrito.indexOf(producto)] = document.getElementById("carrito-" + producto.id);
                        botones_carrito_add[productosCarrito.indexOf(producto)].innerHTML = "+";
                        botones_carrito_add[productosCarrito.indexOf(producto)].addEventListener('click', () => {
                                actualizar_carrito(productosStock.find(stock => stock.id == producto.id), "agregar");
                                render_productos ("carrito");
                        });
                });
        }
        
        console.log("LLEGUÉ");
        
};



/**********************************************/

const init = () => {
        render_productos ("productos");
        render_productos ("recomendaciones");
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
        // botonComprar.addEventListener('click', () => alert("Perfecto! Compra realizada."));
};

localStorage.setItem('productosStock', JSON.stringify(productosStock));
localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));
localStorage.setItem('productosRecomendados', JSON.stringify(productosRecomendados));
// console.log (papas.id);
init();



// 👉🏻 El navbar al scrollear está por debajo de las categorias. Lo podés solucionar rapidamente agregandole un z-index.
// 👉🏻 El carrito no está mostrando el total y no se puede manejar la cantidad de cada producto.
// ⚠️ Revisate como está armado el del Nucba NFT para que lo puedas realizar.
// ⚠️ La página no está responsive que era requisito para aprobar este integrador, cuidado ahi! 

// addEventListener ('click', agregar_producto);
// // si la cantidad del producto en carrito es 0:
// addEventListener ('click', eliminar_producto);

// mostrar_precio_total ();
// actualizar_local_storage ();
// console.log(productosCarrito);
// console.log(carritoVacio);


