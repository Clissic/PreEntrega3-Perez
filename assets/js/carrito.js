let itemsCarrito = localStorage.getItem("carrito")
itemsCarrito = JSON.parse(itemsCarrito)
console.log(itemsCarrito)
const itemsCarritoId = document.getElementById("itemsCarritoId")
const nombreProductoResumen = document.getElementById("itemsResumenCarrito")
const totalResumen = document.getElementById("totalResumen")
let btnEliminar = document.querySelectorAll(".btnEliminar")

function cargarProductosCarrito () {
    itemsCarritoId.innerHTML = ""
    nombreProductoResumen.innerHTML = ""
    totalResumen.innerHTML = ""
    
    if (itemsCarrito) {
        itemsCarrito.forEach(producto => {
            const div1 = document.createElement("div")
            const subtotal = producto.precio * producto.cantidad
            div1.innerHTML = `
            <div class="itemCarrito">
                <img src="${producto.imagen}" alt="${producto.titulo}">
                <div class="datosItemCarrito">
                    <p>${producto.titulo}</p>
                    <ul>
                        <li>Color: <em>${producto.color}</em></li>
                        <li>Talle: <em>${producto.talle}</em></li>
                        <li>Marca: <em>${producto.marca}</em></li>
                    </ul>
                    <div class="opcionesCarrito">
                        <div class="sumarItemCarrito">
                            <button class="restarProducto">-</button>
                            <p>${producto.cantidad}</p>
                            <button class="sumarProducto">+</button>
                        </div>
                        <a id="${producto.id}" class="btnEliminar" href="#"><img class="borrarItemCarrito" src="../assets/images/bin-cancel-delete-remove-trash-garbage-svgrepo-com.svg" alt="eliminar"></a>
                        <ul>
                            <li>Precio: <em>$${producto.precio}</em></li>
                            <li>Subtotal: <em>$${subtotal}</em></li>
                        </ul>
                    </div>
                </div>
            </div>
            `;
            itemsCarritoId.append(div1)
        });
    }
    
    if (itemsCarrito) {
        itemsCarrito.forEach(producto  => {
            const div2 = document.createElement("div")
            const subtotal = producto.precio * producto.cantidad
            div2.classList.add("totalResumen")
            div2.innerHTML = `
                <p class="nombreItemResumen">${producto.titulo} x${producto.cantidad}</p>
                <p class="subtotalResumen"><strong>$${subtotal}</strong></p>
            `;
            nombreProductoResumen.append(div2)
        })
    }
    actualizarBtnEliminar()
    actualizarTotal()
}

cargarProductosCarrito ()


function actualizarBtnEliminar() {
    btnEliminar = document.querySelectorAll(".btnEliminar")
    btnEliminar.forEach(boton => {
      boton.addEventListener("click", eliminarItemCarrito)
    })
  }

function eliminarItemCarrito(e) {
    const botonId = e.currentTarget.id
    const indexProductoEliminado = itemsCarrito.findIndex(producto => producto.id === botonId)
    itemsCarrito.splice(indexProductoEliminado, 1)
    cargarProductosCarrito()
    console.log(itemsCarrito)
    localStorage.setItem("carrito", JSON.stringify(itemsCarrito))
}

function actualizarTotal() {
    const productoTotal = itemsCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)
    const div3 = document.createElement("div")
    div3.classList.add("totalResumen")
    div3.innerHTML = `
        <p>Total:</p>
        <p><strong>$${productoTotal}</strong></p>
    `;
    totalResumen.append(div3)
}