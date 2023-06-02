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
        categoria: 'Categoría 1',
        altImagen: 'Soy la descripcion de la imagen del producto 1',
    },
    {
        id: 2,
        nombre: 'Producto 2',
        descripcion: 'Descripción del producto',
        precio: 200,
        imagen: 'producto-de-ejemplo.jpg',
        categoria: 'Categoría 1',
        altImagen: 'Soy la descripcion de la imagen del producto 2',
    },
    {
        id: 3,
        nombre: 'Producto 3',
        descripcion: 'Descripción del producto',
        precio: 300,
        imagen: 'producto-de-ejemplo.jpg',
        categoria: 'Categoría 2',
        altImagen: 'Soy la descripcion de la imagen del producto 3',
    },
    {
        id: 4,
        nombre: 'Producto 4',
        descripcion: 'Descripción del producto',
        precio: 400,
        imagen: 'producto-de-ejemplo.jpg',
        categoria: 'Categoría 2',
        altImagen: 'Soy la descripcion de la imagen del producto 4',
    },
    {
        id: 5,
        nombre: 'Producto 5',
        descripcion: 'Descripción del producto',
        precio: 500,
        imagen: 'producto-de-ejemplo.jpg',
        categoria: 'Categoría 3',
        altImagen: 'Soy la descripcion de la imagen del producto 5',
    },
    {
        id: 6,
        nombre: 'Producto 6',
        descripcion: 'Descripción del producto',
        precio: 600,
        imagen: 'producto-de-ejemplo.jpg',
        categoria: 'Categoría 3',
        altImagen: 'Soy la descripcion de la imagen del producto 6',
    },
];

/** 
 * Catalogo Array vacío para almacenar los productos que genero con la clase producto, en un catalago.
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
console.log(aCatalogo);

/** 
 * Con un for of, se recorre cada objeto en aCroductos.
 * Se agrega el artículo del producto al elemento del DOM con el ID "contenedorProductos".
*/
for (const producto of aCatalogo) {
    sectionPrincipal.append(producto.mostrarProducto());
}



/**
 * Agrega un producto al carrito.
 * @param {Object} producto - El producto que se va a agregar al carrito.
*/
function agregarAlCarrito(producto){
    aCarrito.push(producto);
    console.log(aCarrito);
}

/**
 * Programo función cerrar para ocultar ventana modal
 */
function Cerrar() {
    let cerrar = document.querySelector("#modalProducto");
    cerrar.remove();
}