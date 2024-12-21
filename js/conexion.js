async function getProductos() {
    const response = await fetch("http://localhost:3001/products")
    // console.log(response)
    const productos = await response.json()
    //console.log(productos)
    return productos
}

async function postProductos(producto) {
    const response = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
    })
    const data = await response.json()
    if (!response.ok) {
        throw new Error(data.message)
    }
}

//delete productos
async function deleteProducto(id) {
    try {
        const response = await fetch(`http://localhost:3001/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        console.log(response)
    } catch {
        throw new Error("Error al borrar el producto")
    }
}

export const conexionApi = {
    getProductos,
    postProductos,
    deleteProducto,
}
