'use strict';
/**
 * Clase que representa un producto.
*/
class producto {
    /**
     * Crea una instancia de la clase producto.
     * @param {string} nombre - El nombre del producto.
     * @param {string} imagen - La URL de la imagen del producto para agregarle al atributo src.
     * @param {string} altImagen - La descripciòn de la imágen para agregarle al atributo alt.
     * @param {number} id - El ID del producto.
     * @param {string} categoria - La categoría del producto.
     * @param {number} precio - El precio del producto.
     * @param {string} descripcion - La descripción del producto.
    */
    #nombre;
    #imagen;
    #altImagen;
    #id;
    #categoria;
    #precio;
    #descripcion;

    constructor(nombre, imagen, altImagen, id, categoria, precio, descripcion) {
        this.#nombre = nombre;
        this.#imagen = imagen;
        this.#altImagen = altImagen;
        this.#id = id;
        this.#categoria = categoria;
        this.#precio = precio;
        this.#descripcion = descripcion;
    }

    /**
     * Obtiene el nombre del producto.
     * @returns {string} El nombre del producto.
    */
    getNombre () {
        return this.#nombre;
    }

    /**
     * Obtiene la imagen del producto.
     * @returns {string} La URL de la imagen del producto para agregarle al atributo src.
    */
    getImagen () {
        return this.#imagen;
    }
    
    /**
     * Obtiene el alt de la imagen del producto.
     * @returns {string} La descripciòn de la imágen para agregarle al atributo alt.
    */
    getAltImagen () {
        return this.#altImagen;
    }

    /**
     * Obtiene el ID del producto.
     * @returns {number} El ID del producto.
    */
    getId () {
        return this.#id;
    }

    /**
     * Obtiene la categoría del producto.
     * @returns {string} La categoría del producto.
    */
    getCategoria () {
        return this.#categoria;
    }

    /**
     * Obtiene el precio del producto.
     * @returns {number} El precio del producto.
    */
    getPrecio () {
        return this.#precio;
    }

    /**
     * Obtiene la descripción del producto.
     * @returns {string} La descripción del producto.
    */
    getDescripcion () {
        return this.#descripcion;
    }

    /**
     * Con este método se muestra el producto en el documento HTML.
     * Se crea la siguiente estructura:
     * <article class="card">
     *      <h3>${this.#nombre}</h3>
     *          </img src="this.#imagen">
     *          <p>Código: ${this.#id}</p>
     *          <p>Categoria: ${this.#categoria}</p>
     *          <p>Precio: ${this.#precio}</p>
     *          <p>Descripcion: ${this.#descripcion}</p>
     *          <button>Agregar al carrito</button>
     *          <button>Ver más</button>
     * </article>
    */
    mostrarProducto() {
        let articleProducto = document.createElement("article");
        articleProducto.classList.add("card");

            let h3Nombre = document.createElement("h3");
            h3Nombre.innerText = `${this.#nombre}`;

                let imgImagen = document.createElement("img");
                imgImagen.setAttribute("src", this.#imagen);
                imgImagen.setAttribute("alt", this.#altImagen);

                let pId = document.createElement("p");
                pId.innerText = `Codigo: ${this.#id}`;

                let pCategoria = document.createElement("p");
                pCategoria.innerText = `Categoria: ${this.#categoria}`;

                let pPrecio = document.createElement("p");
                pPrecio.innerText = `Precio: $${this.#precio}.-`;

                let pDescripcion = document.createElement("p");
                pDescripcion.innerText = `Descripcion: ${this.#descripcion}`;

                let buttonAgregarCarrito = document.createElement ("button");
                buttonAgregarCarrito.innerText = `Agregar al carrito`;
                buttonAgregarCarrito.classList.add("btn-agregarCarrito");
                buttonAgregarCarrito.setAttribute("onclick", agregarProducto());

                let buttonVerMas = document.createElement ("button");
                buttonVerMas.innerText = `Ver más`;
                buttonVerMas.classList.add("btn-verDetalle");
                /*
                * PREGUNTA: es acá que genero la modal para que se vea el detalle del producto?
                */

        articleProducto.append(h3Nombre, imgImagen, pId, pCategoria, pPrecio, pDescripcion, buttonAgregarCarrito, buttonVerMas);
        return articleProducto;
    }
}