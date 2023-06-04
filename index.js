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
    aCarrito.push(producto);
    console.log(aCarrito);
}

/* 
    aCarrito esta declarado como un array vacio, pero deberia ser un objeto con al menos tres propiedas para el minicarrito:
    - ids -> como array para gaurdar los ids de los productos y  poder identificarlos despues al querer mostrarlos en la modal del carrito
    - cantidadProductos -> como array
    - pagoTotal 

    let aCarrito {
        ids : [],
        cantidadProductos : [],
        pagoTotal : 0,
    }

    Tambien precisamos 1 variable para contar los productos agregados al carrito y 1 variable para acumular el precio de cada producto agregado al carrito

    En la función agregar guardo el precio del producto agregado en una variable
    lo sumo a "pagoTotal" para llevar el total actualizado
    acumulo un producto 
    acumulo el precio

    identifico las etiquetas en el html para mostrar el valor de los dos acumuladores
*/