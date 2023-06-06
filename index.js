'use strict';

/**
 * ARCHILLI, MATIAS
 * SANCHEZ LIPORACE, ANDREA
*/

/** 
 * Array de objetos que representa productos.
 * Cada objeto contiene las propiedades: id, nombre, descripcion, precio, imagen, categoría.
 */
let aProductos = [
    {
        id: 1,
        nombre: 'Producto 1',
        descripcion: 'Descripción del producto',
        precio: 100,
        imagen: 'producto-de-ejemplo.jpg',
        categoria: 'categoria1',
        altImagen: 'Soy la descripcion de la imagen del producto 1',
    },
    {
        id: 2,
        nombre: 'Producto 2',
        descripcion: 'Descripción del producto',
        precio: 200,
        imagen: 'producto-de-ejemplo.jpg',
        categoria: 'categoria1',
        altImagen: 'Soy la descripcion de la imagen del producto 2',
    },
    {
        id: 3,
        nombre: 'Producto 3',
        descripcion: 'Descripción del producto',
        precio: 300,
        imagen: 'producto-de-ejemplo.jpg',
        categoria: 'categoria2',
        altImagen: 'Soy la descripcion de la imagen del producto 3',
    },
    {
        id: 4,
        nombre: 'Producto 4',
        descripcion: 'Descripción del producto',
        precio: 400,
        imagen: 'producto-de-ejemplo.jpg',
        categoria: 'categoria2',
        altImagen: 'Soy la descripcion de la imagen del producto 4',
    },
    {
        id: 5,
        nombre: 'Producto 5',
        descripcion: 'Descripción del producto',
        precio: 500,
        imagen: 'producto-de-ejemplo.jpg',
        categoria: 'categoria3',
        altImagen: 'Soy la descripcion de la imagen del producto 5',
    },
    {
        id: 6,
        nombre: 'Producto 6',
        descripcion: 'Descripción del producto',
        precio: 600,
        imagen: 'producto-de-ejemplo.jpg',
        categoria: 'categoria3',
        altImagen: 'Soy la descripcion de la imagen del producto 6',
    },
];

/** 
 * aCatalogo: almacenará los productos que genero con la clase producto, en un catalago.
 * aCarrito: Lo uso desde la línea 152 para almacenar los productos que el cliente desea agregar a su carrito de compras
*/
let aCatalogo = [];
let aCarrito = [];
let precioTotal = 0;
let contadorProductos = 0;

/** 
 * Busco la etiqueta section del HTML con el ID "contenedorProductos", porque es donde quiero mostrar la estructura que creo con DOM para cada articulo de aCatalogo.
*/
let sectionPrincipal = document.getElementById("contenedorProductos");

/** 
 * Con un for of, se recorre cada objeto en aProductos.
 * Se crea un nuevo objeto "producto" utilizando la clase "producto" y se agrega al array "aCatalogo".
*/
for(let i = 0; i < aProductos.length; i++){
    let nuevoProducto = new producto(
            aProductos[i].nombre,
            aProductos[i].imagen,
            aProductos[i].altImagen,
            aProductos[i].id,
            aProductos[i].categoria,
            aProductos[i].precio,
            aProductos[i].descripcion,
        );
    aCatalogo.push(nuevoProducto);
}

/** 
 * Con un for of, se recorre cada objeto en aProductos.
 * Se agrega el artículo del producto al elemento del DOM con el ID "contenedorProductos".
*/
for (const producto of aCatalogo) {
    sectionPrincipal.append(producto.mostrarProducto());
}

/**
 * Filtra los productos por una categoría específica y muestra los resultados en la página.
 * @param {string} categoriaElegida - La categoría por la cual filtrar los productos.
 */
function filtrarPorCategoria(categoriaElegida) {
    // Limpiamos la section de productos
    sectionPrincipal.innerHTML = "";

    // Creamos un array para guardar los productos filtrados e indicamos como realizar el filtro por categoría
    let aCatalogoFiltrado = aCatalogo.filter((producto) => producto.getCategoria().includes(categoriaElegida));
    console.log(aCatalogoFiltrado);

    // Buscamos el div donde se encuentran los botones para filtrar la categoria
    let divFiltros = document.querySelector('.filtros');
    // Guardamos en una variable el boton EliminarFiltro
    let buttonEliminarFiltro = document.querySelector('.btn-eliminar');

    // Analizamos si ya hay un boton EliminarFiltro y lo eliminamos antes de agregar uno nuevo
    if (buttonEliminarFiltro) {
        buttonEliminarFiltro.remove();
    }

    // Creamos un botón para elimiar el filtro aplicado por el cliente
    buttonEliminarFiltro = document.createElement("button");
    buttonEliminarFiltro.innerText = 'Eliminar filtro';
    buttonEliminarFiltro.classList.add("btn-eliminar");
    buttonEliminarFiltro.addEventListener('click', () => {
        // Quitamos el botón directamente del divFiltros
        divFiltros.removeChild(buttonEliminarFiltro); 
        // Limpiamos la sección de productos
        sectionPrincipal.innerHTML = "";
        // Recorro aCatalogo para mostrar el catalogo completo nuevamente
        for (const producto of aCatalogo) {
            sectionPrincipal.append(producto.mostrarProducto());
        }
    });
    
    // Appendeo el boton EliminarFiltro al divFiltros
    divFiltros.append(buttonEliminarFiltro);
    // Recorro arrayFiltrado para mostrar los productos filtrados
    for (const producto of aCatalogoFiltrado) {
        console.log(producto);
        sectionPrincipal.append(producto.mostrarProducto());
    }
}

/**
 * CARRITO *
*/
/** 
 * aCarrito: Lo uso para almacenar los productos que el cliente desea agregar a su carrito de compras.
 * Está declarado en la línea 74 de este archivo.
*/
/**
 * Agrega un producto al carrito.
 * @param {Object} producto - El producto que se va a agregar al carrito.
*/
function agregarAlCarrito(producto){
    let itemCarrito = document.querySelector("#itemsCarrito");
    let precioFinal = document.querySelector("#totalPagar");

    let itemCarritoModal = document.querySelector("#pCantProductosModal");
    let precioFinalModal = document.querySelector("#pPrecioTotalModal");

    precioTotal += producto.getPrecio();
    aCarrito.push(producto);
    contadorProductos++;

    if(itemCarritoModal || precioFinalModal != null){
        itemCarritoModal.innerText = "Cantidad de productos: " + contadorProductos;
        precioFinalModal.innerText = "Total a pagar: $" + precioTotal;
    }
    
    itemCarrito.innerText = contadorProductos;
    precioFinal.innerText = precioTotal;
}

/**
 * Elimina un producto del carrito de compras.
 * @param {Producto} producto - El producto a eliminar.
 * @param {number} indice - El índice del producto en el carrito.
*/
function eliminarDelCarrito(producto, indice){
    let itemCarrito = document.querySelector("#itemsCarrito");
    let precioFinal = document.querySelector("#totalPagar");

    let itemCarritoModal = document.querySelector("#pCantProductosModal");
    let precioFinalModal = document.querySelector("#pPrecioTotalModal");
    
    precioTotal -= producto.getPrecio();
    
    console.log(indice);
    console.log(aCarrito.length);
    for (let i=indice; i<aCarrito.length; i++) {
        aCarrito[i] = aCarrito[i+1];
    }
    contadorProductos--;
    aCarrito.pop();

    if(itemCarritoModal || precioFinalModal != null){
        itemCarritoModal.innerText = "Cantidad de productos: " + contadorProductos;
        precioFinalModal.innerText = "Total a pagar: $" + precioTotal;
    }
    
    itemCarrito.innerText = contadorProductos;
    precioFinal.innerText = precioTotal;
    console.log(aCarrito);
}

/**
 * Muestra el carrito de compras en una ventana modal.
 * @returns {Element} El elemento HTML que contiene los productos del carrito.
*/
function verCarrito () {
    let modalDetalle = document.querySelector("#modalProducto");
    let modalCarrito = document.querySelector("#modalCarrito");

    if(modalDetalle){
        modalDetalle.remove();
    }

    if (modalCarrito) {
        modalCarrito.remove();
    }

    modalCarrito = document.createElement("div");
    modalCarrito.classList.add("modalCarrito");
    modalCarrito.setAttribute("id", "modalCarrito");

    const aCerrar = document.createElement("a");
    aCerrar.setAttribute("href", "javascript:void(0)");
    aCerrar.innerText = "X";
    aCerrar.addEventListener('click', () => {
        let cerrar = document.querySelector("#modalCarrito");
        cerrar.remove();
    });
    
    const h3Carrito = document.createElement("h3");
    h3Carrito.innerText = "Mi Carrito";

    const pPrecioTotal = document.createElement("p");
    pPrecioTotal.setAttribute('id','pPrecioTotalModal');
    pPrecioTotal.innerText = "Total a pagar: $" + precioTotal;

    const pCantProductos = document.createElement("p");
    pCantProductos.setAttribute('id','pCantProductosModal');
    pCantProductos.innerText = "Cantidad de productos: " + contadorProductos;

    /*Como mostramos la cantidad de productos totales si lo tenemos en un span*/

    const divProductosCarrito = document.createElement("div");
    divProductosCarrito.classList.add("productosCarrito");

    const buttonVaciar = document.createElement("button");
    buttonVaciar.innerText = "Vaciar carrito";
    buttonVaciar.classList.add("btn-vaciarCarrito");
    buttonVaciar.addEventListener('click', () => {
        aCarrito = [];
        precioTotal = 0;
        contadorProductos = 0;
        divProductosCarrito.innerHTML = "";
        pPrecioTotal.innerText = "Total a pagar: $" + precioTotal;
        pCantProductos.innerText = "Cantidad de productos: " + contadorProductos;
        //console.log(aCarrito);
    });
    
    const buttonComprar = document.createElement("button");
    buttonComprar.innerText = "Reservar productos";
    buttonComprar.classList.add("btn-compra");
    buttonComprar.addEventListener('click', () => {
        // Ejecuta la funcion ralizar compra que muestra una modal con un mensaje de productos reservados
        // A futuro mostrará un formulario para realizar la compra directamente
        realizarCompra()
    });
    
    for (const producto of aCarrito) {
        divProductosCarrito.append(producto.mostrarMiniProducto());
    }

    modalCarrito.append(aCerrar, h3Carrito, pPrecioTotal, pCantProductos, divProductosCarrito, buttonComprar, buttonVaciar);

    // Traemos el div que esta al mismo nivel de la seccion de productos
    const sectionProductos = document.querySelector("#contenedorProductos");
    sectionProductos.parentNode.appendChild(modalCarrito);
    return sectionProductos;
}

/**
 * Muestra un modal de confirmación de compra.
 * @returns {Element} Una ventana modal con un mensaje de reserva exitosa, con el form de compra desarrollado, mostraría el form de compra
*/
function realizarCompra() {
    let modalDetalle = document.querySelector("#modalProducto");
    let modalCarrito = document.querySelector("#modalCarrito");

    if(modalDetalle){
        modalDetalle.remove();
    }

    if (modalCarrito) {
        modalCarrito.remove();
    }

    let modalCompra = document.createElement("div");
    modalCompra.classList.add("modalCompra");
    modalCompra.setAttribute("id", "modalCompra");

    const aCerrar = document.createElement("a");
    aCerrar.setAttribute("href", "javascript:void(0)");
    aCerrar.innerText = "X";
    aCerrar.addEventListener('click', () => {
        let cerrar = document.querySelector("#modalCompra");
        cerrar.remove();
    });

    const h3Compra = document.createElement("h3");
    h3Compra.innerText = "Gracias por tu reserva";

    const pCompra1 = document.createElement("p");
    pCompra1.innerText = "La reserva de tus productos se realizó con éxito";

    const pCompra2 = document.createElement("p");
    pCompra2.innerText = "Para finalizar tu compra envianos un mail con el n° de reserva a la casilla: archilli-sanchezliporace@programacion1.com";

    // Traemos el div que esta al mismo nivel de la seccion de productos
    // No termino de darme cuenta como crear un hijo de la modal carrito
}