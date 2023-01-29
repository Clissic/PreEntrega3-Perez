const containerProducto = document.getElementById("grillaProductosId");

function cargarProductos(productosElegidos) {
  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.id = "cardId";
    div.classList.add("card");
    div.innerHTML = `
        <p id="alertaDescuentoNone">DESCUENTA 22% IVA</p>
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}" />
        <div class="card-body">
          <h5 class="card-title">${producto.titulo}</h5>
          <h6 class="cardMarca">
            Marca: ${producto.marca}
          </h6>
          <div id="cardTalles">
            <h6>Talles:</h6>
            <select>
              <option class="talle-${producto.talle[0]}" value="${producto.talle[0]}">${producto.talle[0]}</option>
              <option class="talle-${producto.talle[1]}" value="${producto.talle[1]}">${producto.talle[1]}</option>
              <option class="talle-${producto.talle[2]}" value="${producto.talle[2]}">${producto.talle[2]}</option>
              <option class="talle-${producto.talle[3]}" value="${producto.talle[3]}">${producto.talle[3]}</option>
              <option class="talle-${producto.talle[4]}" value="${producto.talle[4]}">${producto.talle[4]}</option>
              <option class="talle-${producto.talle[5]}" value="${producto.talle[5]}">${producto.talle[5]}</option>
            </select>
          </div>
          <h3 class="cardPrecio" id="cardPrecioId">
            Precio: $${producto.precio}
          </h3>
          <a href="#" class="btn btn-primary"
            ><img
              class="imgCarritoBlanco"
              src="../assets/images/carrito blanco.png"
              alt="comprar"
            />
            COMPRAR</a>
        `;
    containerProducto.append(div);
  });
}

cargarProductos(productos);

// Aplicando el Método
prod4.descuentoIva()
console.log(prod4.precio)