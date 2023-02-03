const itemsCarrito = JSON.parse(localStorage.getItem("carrito"))
console.log(itemsCarrito)
const itemsCarritoId = document.getElementById("itemsCarritoId")

itemsCarritoId.innerHTML = ""

if (itemsCarrito) {
    itemsCarrito.forEach(producto => {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="itemCarrito">
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <div class="datosItemCarrito">
                <p>${producto.titulo}</p>
                <ul>
                    <li>Color: <em>${producto.color}</em> </li>
                    <li>Talle: <em>${producto.talle}</em></li>
                    <li>Marca: <em>${producto.marca}</em></li>
                </ul>
                <div class="opcionesCarrito">
                    <div class="sumarItemCarrito">
                        <button class="restarProducto">-</button>
                        <p>${producto.cantidad}</p>
                        <button class="sumarProducto">+</button>
                    </div>
                    <a href="#"><img class="borrarItemCarrito" src="../assets/images/bin-cancel-delete-remove-trash-garbage-svgrepo-com.svg" alt="eliminar"></a>
                    <p>$${producto.precio}</p>
                </div>
            </div>
        </div>
        `;
        itemsCarritoId.append(div)
    });

}