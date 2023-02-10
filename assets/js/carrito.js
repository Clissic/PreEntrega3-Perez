let carrito = localStorage.getItem("carrito")
carrito = JSON.parse(carrito)
console.log(carrito)
const itemsCarritoId = document.getElementById("itemsCarritoId")
const nombreProductoResumen = document.getElementById("itemsResumenCarrito")
const totalResumen = document.getElementById("totalResumen")
let btnEliminar = document.querySelectorAll(".btnEliminar")
const btnVaciarCarrito = document.getElementById("btnVaciarCarritoId")

function cargarProductosCarrito () {
    itemsCarritoId.innerHTML = ""
    nombreProductoResumen.innerHTML = ""
    totalResumen.innerHTML = ""
    
    if (carrito) {
        carrito.forEach(producto => {
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
    
    if (carrito) {
        carrito.forEach(producto  => {
            const div2 = document.createElement("div")
            const subtotal = producto.precio * producto.cantidad
            div2.classList.add("totalResumen")
            div2.innerHTML = `
                <p class="nombreItemResumen">${producto.titulo} - Talle: ${producto.talle} - x${producto.cantidad}</p>
                <p class="subtotalResumen"><strong>$${subtotal}</strong></p>
            `;
            nombreProductoResumen.append(div2)
        })
    }

    actualizarBtnEliminar()
    actualizarTotal()
}

function verVaciarCarrito() {
    if (carrito.length >= 1) {
        btnVaciarCarrito.classList.remove("inactive")
    }
}


btnVaciarCarrito.addEventListener("click", (e) => {
    e.preventDefault()
    swal({
        title: "VACIAR CARRITO",
        text: "¿Estas seguro que quieres vaciar todo el carrito de compras?", 
        icon: "warning",
        buttons: ["CANCELAR", "CONTINUAR"],
        dangerMode: true,
    })
    .then ((borrarCarrito) => {
        if (borrarCarrito) {
            carrito.splice(0, carrito.length)
            cargarProductosCarrito()
            console.log(carrito)
            localStorage.setItem("carrito", JSON.stringify(carrito))
        }
    })
}) 


verVaciarCarrito()
cargarProductosCarrito()


function actualizarBtnEliminar() {
    btnEliminar = document.querySelectorAll(".btnEliminar")
    btnEliminar.forEach(boton => {
      boton.addEventListener("click", eliminarItemCarrito)
    })
  }

function eliminarItemCarrito(e) {
    e.preventDefault()
    const botonId = e.currentTarget.id
    const indexProductoEliminado = carrito.findIndex(producto => producto.id === botonId)
    carrito.splice(indexProductoEliminado, 1)
    cargarProductosCarrito()
    console.log(carrito)
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function actualizarTotal() {
    const productoTotal = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)
    const div3 = document.createElement("div")
    div3.classList.add("totalResumen")
    div3.innerHTML = `
        <p>Total:</p>
        <p><strong>$${productoTotal}</strong></p>
    `;
    totalResumen.append(div3)
}

