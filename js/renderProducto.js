import { conexionApi } from "./conexion.js"
import { createProductos } from "./crearProducto.js"
const $products = document.querySelector("#products")

const createCard = (producto) => {
    const $li = document.createElement("li")
    const template = ` <div class="product-card">
                        <img
                            class="product-card__image"
                            src="${producto.image}"
                            alt="${producto.title}"
                        />
                            <div class="product-card__info">
                                <span class="product-card__name">${producto.title}</span>
                                <span class="product-card__price"
                                >${producto.price}</span>
                                <button data-delete="${producto.id}" class="product-card__button">Eliminar</button>
                            </div>
                        </div>`
    $li.innerHTML = template
    return $li
}

function renderProductos() {
    conexionApi
        .getProductos()
        .then((productos) => {
            productos.forEach((producto) => {
                $products.appendChild(createCard(producto))
            })
        })
        .catch((error) => {
            $products.innerHTML = `<p>Error: Hubo un problema al obtener los datos</p>`
        })
}
renderProductos()

//Crear Productos
createProductos()
//Delete Productos
$products.addEventListener("click", (e) => {
    if (e.target.matches(".product-card__button")) {
        const id = e.target.getAttribute("data-delete")
        console.log(id, "id....")
        //e.target.parentElement.parentElement.remove()
        conexionApi.deleteProducto(id)
    }
    return
})

export { createCard }
