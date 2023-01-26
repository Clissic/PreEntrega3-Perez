// PRODUCTOS

const productos = [

  {
    id: "prod1",
    titulo: "Buzo canguro con capucha, negro, 100% algodón",
    imagen: "../assets/images/publ1.jpg",
    recomendado: true,
    masVendido: true,
    novedad: true,
    categoria: "ropa",
    tipo: "buzo",
    color: "negro",
    marca: "TOMMY HILFIGER",
    precio: 3390,
    talle: "S",
    sexo: "hombre",
    edad: "adulto",
  },

  {
    id: "prod2",
    titulo: "Buzo canguro con capucha, blanco, 100% algodón",
    imagen: "../assets/images/publ2.jpg",
    recomendado: true,
    masVendido: true,
    novedad: true,
    categoria: "ropa",
    tipo: "buzo",
    color: "blanco",
    marca: "TOMMY HILFIGER",
    precio: 3390,
    talle: "S",
    sexo: "hombre",
    edad: "adulto",
  },

  {
    id: "prod3",
    titulo: "Buzo manga larga, varios colores, 100% algodón",
    imagen: "../assets/images/publ3.jpg",
    recomendado: true,
    masVendido: true,
    novedad: true,
    categoria: "ropa",
    tipo: "buzo",
    color: "blanco",
    marca: "TOMMY HILFIGER",
    precio: 2490,
    talle: "S",
    sexo: "hombre",
    edad: "adulto",
  },

  {
    id: "prod4",
    titulo: "Short de baño, varios diseños",
    imagen: "../assets/images/publ4.jpg",
    recomendado: true,
    masVendido: true,
    novedad: true,
    categoria: "ropa",
    tipo: "short",
    color: "blanco",
    marca: "TOMMY HILFIGER",
    precio: 1990,
    talle: "M",
    sexo: "hombre",
    edad: "adulto",
  },

  {
    id: "prod5",
    titulo: "Básicas manga corta, varios colores, 100% algodón",
    imagen: "../assets/images/publ5.jpg",
    recomendado: true,
    masVendido: true,
    novedad: true,
    categoria: "ropa",
    tipo: "remera",
    color: "azul",
    marca: "TOMMY HILFIGER",
    precio: 1390,
    talle: "S",
    sexo: "hombre",
    edad: "adulto",
  },

  {
    id: "prod6",
    titulo: "Básicas manga corta, varios colores, 100% algodón",
    imagen: "../assets/images/publ6.jpg",
    recomendado: true,
    masVendido: true,
    novedad: true,
    categoria: "ropa",
    tipo: "remera",
    color: "azul",
    marca: "LACOSTE",
    precio: 1390,
    talle: ["S", "M", "L"],
    sexo: "hombre",
    edad: "adulto",
  },

  {
    id: "prod7",
    titulo: "Remera estampada, varios diseños, 100% algodón",
    imagen: "../assets/images/publ7.jpg",
    recomendado: true,
    masVendido: true,
    novedad: true,
    categoria: "ropa",
    tipo: "remera",
    color: "rojo",
    marca: "TOMMY HILFIGER",
    precio: 1390,
    talle: ["S", "M", "L"],
    sexo: "hombre",
    edad: "adulto",
  },

  {
    id: "prod8",
    titulo: "Remera COCODRILO manga corta blanca, 100% algodón",
    imagen: "../assets/images/publ8.jpg",
    recomendado: true,
    masVendido: true,
    novedad: true,
    categoria: "ropa",
    tipo: "remera",
    color: "blanco",
    marca: "LACOSTE",
    precio: 1390,
    talle: ["S", "L"],
    sexo: "hombre",
    edad: "adulto",
  },

  {
    id: "prod9",
    titulo: "Remera HILFIGER manga corta azul, 100% algodón",
    imagen: "../assets/images/publ9.jpg",
    recomendado: true,
    masVendido: true,
    novedad: true,
    categoria: "ropa",
    tipo: "remera",
    color: "azul",
    marca: "TOMMY HILFIGER",
    precio: 1390,
    talle: "S",
    sexo: "hombre",
    edad: "adulto",
  },

];

//Función CONSTRUCTORA
function Producto(
  id,
  titulo,
  imagen,
  recomendado,
  masVendido,
  novedad,
  categoria,
  tipo,
  color,
  marca,
  precio,
  talle,
  sexo,
  edad
) {
  this.id = id;
  this.titulo = titulo;
  this.imagen = imagen;
  this.recomendado = recomendado;
  this.masVendido = masVendido;
  this.novedad = novedad;
  this.categoria = categoria;
  this.tipo = tipo;
  this.color = color;
  this.marca = marca;
  this.precio = precio;
  this.talle = talle;
  this.sexo = sexo;
  this.edad = edad;

  // Metodo
  this.descuentoIva = function (precio) {
    this.precio = precio - precio * 0.21;
    console.log(
      "Este " +
        this.tipo +
        " con el descuento del IVA cuesta ahora " +
        this.precio
    );
  };
}

/* // Aplicando el Método
const prod8SinIva = prod8.descuentoIva(prod8.precio) */

const containerProducto = document.getElementById("grillaProductosId");

function cargarProductos(productosElegidos) {
  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    const counter = 0;
    div.classList.add("card");
    div.innerHTML = `
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}" />
        <div class="card-body">
          <h5 class="card-title">${producto.titulo}</h5>
          <h6 class="cardMarca">
            Marca: ${producto.marca}
          </h6>
          <h6 class="cardTalles">
            Talles: ${producto.talle}
          </h6>
          <h3 class="cardPrecio">
            Precio: $${producto.precio}
          </h3>
          <a href="#" class="btn btn-primary"
            ><img
              class="imgCarritoBlanco"
              src="../assets/images/carrito blanco.png"
              alt="comprar"
            />
            COMPRAR</a
          >
        `;

    containerProducto.append(div);
  });
}

cargarProductos(productos);
