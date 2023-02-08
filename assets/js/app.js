const containerProducto = document.getElementById("grillaProductosId");
const botonesCategoria = document.querySelectorAll(".botonesCategoria");
const botonNovedades = document.getElementById("novedades")
let btnAgregar = document.querySelectorAll(".btnAgregar")
const contadorCarrito = document.getElementById("contadorCarrito")

function cargarProductos(productosElegidos) {
  containerProducto.innerHTML = "";
  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.id = "cardId";
    div.classList.add("card");
    div.innerHTML = `
        <p class="alertaDescuentoNone" id="alertaDescuentoNone-${producto.id}">DESCUENTO 22% IVA</p>
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}" />
        <div class="card-body">
          <h5 class="card-title">${producto.titulo}</h5>
          <h6 class="cardMarca">
            Marca: ${producto.marca}
          </h6>
          <div id="cardTalles">
            <h6>Talles:</h6>
            <select id="selectTalle-${producto.id}">
              <option class="talle-${producto.talle[0]}" value="${producto.talle[0]}">${producto.talle[0]}</option>
              <option class="talle-${producto.talle[1]}" value="${producto.talle[1]}">${producto.talle[1]}</option>
              <option class="talle-${producto.talle[2]}" value="${producto.talle[2]}">${producto.talle[2]}</option>
              <option class="talle-${producto.talle[3]}" value="${producto.talle[3]}">${producto.talle[3]}</option>
              <option class="talle-${producto.talle[4]}" value="${producto.talle[4]}">${producto.talle[4]}</option>
              <option class="talle-${producto.talle[5]}" value="${producto.talle[5]}">${producto.talle[5]}</option>
            </select>
          </div>
          <h3 class="cardPrecio" id="cardPrecio-${producto.id}">
            Precio: $${producto.precio}
          </h3>
          <a href="../pages/carrito.html" class="btn btn-primary btnAgregar" id="${producto.id}"
            ><img
              class="imgCarritoBlanco"
              src="../assets/images/carrito blanco.png"
              alt="comprar"
            />
            AGREGAR</a>
        `;
    containerProducto.append(div);
  })
  actualizarBtnAgregar();
}

cargarProductos(productos);

// Aplicando Método DESCUENTO:
descuentoProd1 = prod1.descuentoIva(prod1.precio);
descuentoProd5 = prod5.descuentoIva(prod5.precio);

// Función para modificar el DOM del descuento:
function aplicarDescuento(producto, descuento) {
  precio = document.getElementById("cardPrecio-" + producto.id);
  precio.innerText = `Precio: $${descuento}`;
  precioClass = document.getElementById("alertaDescuentoNone-" + producto.id);
  precioClass.classList.remove("alertaDescuentoNone");
  precioClass.classList.add("alertaDescuento");
}

aplicarDescuento(prod1, descuentoProd1);
aplicarDescuento(prod5, descuentoProd5);

//Conducta de los botones CATEGORIA:
botonesCategoria.forEach(boton => {
  boton.addEventListener("click", (e) => {
    e.preventDefault()
    botonesCategoria.forEach(boton => {
      boton.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
    botonNovedades.classList.remove("active")
    
    const categoriaProductos = productos.filter(producto => producto.categoria === e.currentTarget.id);
    cargarProductos(categoriaProductos);

    aplicarDescuento(prod1, descuentoProd1);
    aplicarDescuento(prod5, descuentoProd5);
  })
})

//Conducta del boton NOVEDADES
botonNovedades.addEventListener("click", (e) => {
  e.preventDefault()
  botonesCategoria.forEach(boton => {
    boton.classList.remove("active")
  })
  e.currentTarget.classList.add("active")

  const categoriaNovedades = productos.filter(producto => producto.novedad == true)
  cargarProductos(categoriaNovedades)
  
  aplicarDescuento(prod1, descuentoProd1);
  aplicarDescuento(prod5, descuentoProd5);
})




//Carrito
const itemsCarritoLS = JSON.parse(localStorage.getItem("carrito"))
if (itemsCarritoLS) {
  carrito = itemsCarritoLS
  actualizarContadorCarrito()
} else {
  carrito = []
}

function actualizarContadorCarrito() {
  let numeroContador = carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
  contadorCarrito.innerText = numeroContador
}

function actualizarBtnAgregar() {
  btnAgregar = document.querySelectorAll(".btnAgregar")
  btnAgregar.forEach(boton => {
    boton.addEventListener("click", agregarItemCarrito)
  })
}

function agregarItemCarrito(e) {
  
/*   e.preventDefault() */
  const botonId = e.currentTarget.id
  const productoAgregado = productos.find(producto => producto.id === botonId)
  console.log(e.currentTarget.id)
  const nuevoTalle = document.getElementById(`selectTalle-${e.currentTarget.id}`).value
  console.log(nuevoTalle)
  const productoExistente = carrito.find(producto => producto.id === botonId && producto.talle === nuevoTalle)
  
  if (productoExistente) {
    productoExistente.cantidad++
  } else {
    productoAgregado.cantidad = 1
    productoAgregado.talle = nuevoTalle
    carrito.push(productoAgregado);
  }

  actualizarContadorCarrito()

  localStorage.setItem("carrito", JSON.stringify(carrito))
}
