import { conexionApi } from "./conexion.js"
import { createCard } from "./renderProducto.js"
const $products = document.querySelector("#products")
const $form = document.querySelector("#form")
const { postProductos } = conexionApi
async function createProductos() {
    $form.addEventListener("submit", (event) => {
        event.preventDefault()
        const formData = new FormData($form)
        const producto = Object.fromEntries(formData)
        console.log(producto)

        postProductos(producto)
            .then(() => {
                $products.appendChild(createCard(producto))
            })
            .catch((error) => {
                alert(error)
            })
    })
}

export { createProductos }
