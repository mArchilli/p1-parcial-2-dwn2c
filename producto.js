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
        articleProducto.dataset.id = this.#id; // con .dataset creo el atributo data-id en la card, para que tome el id del producto y se lo asigne a la card. De esta forma puedo identificar el producto al momento de agregarlo al carrito

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

                // La descripción la voy a mostrar en el detalle
                //let pDescripcion = document.createElement("p");
                //pDescripcion.innerText = `Descripcion: ${this.#descripcion}`;

                let buttonAgregarCarrito = document.createElement ("button");
                buttonAgregarCarrito.innerText = `Agregar al carrito`;
                buttonAgregarCarrito.classList.add("btn-agregarCarrito");
                buttonAgregarCarrito.addEventListener('click', (e) => {
                    console.log(e.target.parentNode); 
                    const button = e.target; // con el .target se identifica que boton del html dispara la acción 
                    const articleProducto = button.parentNode; // con .parentNode hago referencia al article que esta identificado con el id del producto.
                    const productoId = articleProducto.dataset.id;
                    for (let producto of aProductos){
                        if (producto.id == productoId){
                            //console.log(producto);
                            agregarAlCarrito(producto);
                            break;
                        }
                    }
                });

                let buttonVerMas = document.createElement("button");
                buttonVerMas.innerText = `Ver más`;
                buttonVerMas.classList.add("btn-verDetalle");
                buttonVerMas.addEventListener('click', () => {
                        // Ventana modal producto
                        const modalDetalle = document.createElement("div");
                        modalDetalle.classList.add("modalDetalle"); 
                        modalDetalle.setAttribute("id", "modalProducto");

                        let h3Nombre = document.createElement("h3");
                        h3Nombre.innerText = `${this.#nombre}`;
        
                        let aCerrar = document.createElement("a");
                        aCerrar.setAttribute("href", "javascript:void(0)");
                        aCerrar.innerText = "X";
                        aCerrar.addEventListener('click', Cerrar());
                        modalDetalle.appendChild(aCerrar);
                        
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

                        modalDetalle.append(h3Nombre, imgImagen, pId, pCategoria, pPrecio, buttonAgregarCarrito);

                        // Traemos el div que esta al mismo nivel de la seccion de productos
                        const sectionProductos = document.querySelector("#contenedorProductos");
                        sectionProductos.parentNode.appendChild(modalDetalle);
                        return sectionProductos;
                    }
                );

        articleProducto.append(h3Nombre, imgImagen, pId, pCategoria, pPrecio, buttonAgregarCarrito, buttonVerMas);
        return articleProducto;
    }
}