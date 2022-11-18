
// OBJETO

class producto {
        constructor (id, nombre, imagen, comentario, precio, categoria, xAgregado, enCarrito) {
          this.id = id;
          this.nombre = nombre;
          this.imagen = imagen;
          this.comentario = comentario;
          this.precio = precio;
          this.categoria = categoria;
          this.xAgregado = xAgregado;
          this.enCarrito = enCarrito;
        }
}


// ARRAYS

const productosStock = [
        new producto (1, "La Mr. Pit", "./assets/imgs/imgpizzas/mr-pit.jfif", "Sólo para expertos", 350, "pizzas", 0, false),
        new producto (2, "¡Q' Jamone!", "./assets/imgs/imgpizzas/Q-Jamone.jfif", "c/jamón crudo", 350, "pizzas", 0, false),
        new producto (3, "La Charly García", "./assets/imgs/imgpizzas/Carly.jfif", "¡BASTA!", 380, "pizzas", 0, false),
        new producto (4, "La Maradona", "./assets/imgs/imgpizzas/bennazianna.jfif", "¡Eterna!", 450, "pizzas", 0, false),
        new producto (5, "Picantovich", "./assets/imgs/imgpizzas/Picantovich.jfif", "Pica 2 veces", 750, "pizzas", 0, false),
        new producto (6, "La Hasbulla", "./assets/imgs/imgpizzas/Hasbulla.jfif", "En honor al 1", 990, "pizzas", 0, false),
        new producto (7, "Leo Messi", "./assets/imgs/imgpizzas/Messi.jfif", "¡De pie señores!", 10, "pizzas", 0, false),
        new producto (8, "Nick Gi", "./assets/imgs/imgpizzas/NickGi.jfif", "La que desaparece", 0, "pizzas", 0, false),
        new producto (9, "Bennazianna", "./assets/imgs/imgpizzas/bennazianna.jfif", "La más completa", 3650, "pizzas", 0, false),
        new producto (10, "Tronco-Pizza", "./assets/imgs/imgpizzas/tronco.jfif", "Para todo el día", 870, "pizzas", 0, false),
        new producto (11, "Papas | Provenzal", "./assets/imgs/imgpizzas/papitas.jfif", "Van como piña", 360, "papas", 0, false),

        new producto (12, "", "", "", 0, "papas", 0, false),
        new producto (13, "", "", "", 0, "papas", 0, false),
        new producto (14, "", "", "", 0, "papas", 0, false),
        new producto (15, "", "", "", 0, "papas", 0, false),
        new producto (16, "", "", "", 0, "hamburguesas", 0, false),
        new producto (17, "", "", "", 0, "hamburguesas", 0, false),
        new producto (18, "", "", "", 0, "hamburguesas", 0, false),
        new producto (19, "", "", "", 0, "hamburguesas", 0, false),
        new producto (20, "", "", "", 0, "wraps", 0, false),
        new producto (21, "", "", "", 0, "wraps", 0, false),
        new producto (22, "", "", "", 0, "wraps", 0, false),
        new producto (23, "", "", "", 0, "mexican", 0, false),
        new producto (24, "", "", "", 0, "mexican", 0, false),
        new producto (25, "", "", "", 0, "mexican", 0, false),
        new producto (26, "", "", "", 0, "mexican", 0, false),
        new producto (27, "", "", "", 0, "mexican", 0, false),
        new producto (28, "", "", "", 0, "batidos", 0, false),
        new producto (29, "", "", "", 0, "batidos", 0, false),
        new producto (30, "", "", "", 0, "batidos", 0, false),
        new producto (31, "", "", "", 0, "batidos", 0, false)
];

let productosCarrito = [];

let productosRecomendados = [];


// ELEMENTOS DE HTML

const populares = document.getElementById("populares");
const pizzas = document.getElementById("pizzas");
const hamburguesas = document.getElementById("hamburguesas");
const papas = document.getElementById("papas");
const wraps = document.getElementById("wraps");
const mexican = document.getElementById("mexican");
const batidos = document.getElementById("batidos");
const categoriasProductos = [populares, pizzas, hamburguesas, papas, wraps, mexican, batidos];

const seccionProductos = document.getElementById("productos");
const seccionRecomendaciones = document.getElementById("recomendaciones");
const carrito = document.getElementById("cart");
const seccionCarrito = document.getElementById("carrito");
const openCarrito = document.getElementById("open-cart");
const closeCarrito = document.getElementById("exit-cart");
const botonComprar = document.getElementById("purchase");
const verMasProd = document.getElementById("view-more");
const carritoVacio = document.getElementById("empty");



// CARRITO

const actualizar_carrito = (producto) => {
        let indexAgregado = productosStock.find(agregado => agregado.id == producto.id).id;
        if (!productosStock[indexAgregado].enCarrito) {
                productosCarrito.push(producto);
                mostrar_producto (seccionCarrito, producto);
                productosStock[indexAgregado].enCarrito = true;
        }
        productosStock[indexAgregado].xAgregado++;

        // addEventListener ('click', agregar_producto);
        // // si la cantidad del producto en carrito es 0:
        // addEventListener ('click', eliminar_producto);

        // mostrar_precio_total ();
        // actualizar_local_storage ();
        console.log(productosCarrito.length);
        // if (!productosCarrito.length === 0) {
        //         carritoVacio.classList.remove("invisible"); 
        // }
        // else {
        // };
};



// RENDER

const mostrar_producto = (seccion, producto) => {
        seccion.innerHTML = seccion.innerHTML + `
                <div class="cards-${seccion.id}">
			<img src="${producto.imagen}" alt="imagen-prod-${producto.id}" class="${seccion.id}-imgs">
                        <div class="datos-prod">
                                <div class="info-prod">
                                        <p class="nombre-prod">${producto.nombre}</p>
                                        <p class="comentario-prod">${producto.comentario}</p>
                                        <p class="precio-prod">$${producto.precio}</p>
                                </div>
                                <button class="btns-add" id="${seccion.id}-${producto.id}">AGREGAR</button>
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
        switch (seccion) {
                case "recomendaciones":
                        productos_renderizados = render_recomendaciones ();
                        break;
                case "carrito":
                        productosCarrito.forEach ((producto) => mostrar_producto (seccionCarrito, producto));
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
                        actualizar_carrito(productosStock.find(stock => stock.id == producto.id));
                        alert(`Agregaste ${producto.nombre}! al carrito!`);
                        carritoVacio.style.display = "none";
                        console.log(carritoVacio);
                });
        });
};



/**********************************************/

const init = () => {
        render_productos ("productos");
        render_productos ("recomendaciones");
        categoriasProductos.forEach ((categoria) => {
                categoria.addEventListener('click', () => {
                        categoriasProductos.forEach((cat) => cat.classList.remove("cat-selected"));
                        categoria.classList.add("cat-selected");
                        render_productos("productos", categoria.id);
                })
        });
        openCarrito.addEventListener('click', () => carrito.classList.remove("invisible"));
        closeCarrito.addEventListener('click', () => carrito.classList.add("invisible"));
        verMasProd.addEventListener('click', () => carrito.classList.add("invisible"));
        botonComprar.addEventListener('click', () => alert("Perfecto! Compra realizada."));
};

localStorage.setItem('productosStock', JSON.stringify(productosStock));
localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));
localStorage.setItem('productosRecomendados', JSON.stringify(productosRecomendados));
// console.log (papas.id);
init();