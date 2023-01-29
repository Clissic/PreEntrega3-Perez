//Clase con función CONSTRUCTORA
class Producto {
  constructor(id,
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
    edad) {
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
    this.descuentoIva = function() {
      this.precio = this.precio - this.precio * 0.22;
      const cardPrecio = document.getElementById("cardPrecioId")
/*       cardPrecio.innerText = "Precio: $" + this.precio */
      document.getElementById("alertaDescuentoNone").id = "alertaDescuento";
    };
  }
}

// PRODUCTOS

const productos = [];

const prod1 = new Producto ("prod1", "Buzo canguro con capucha, negro, 100% algodón", "../assets/images/publ1.jpg", true, true, true, "ropa", "buzo", "negro", "TOMMY HILFIGER", 3390, ["S"], "hombre", "adulto");
const prod2 = new Producto ("prod2", "Buzo canguro con capucha, blanco, 100% algodón", "../assets/images/publ2.jpg", true, true, true, "ropa", "buzo", "blanco", "TOMMY HILFIGER", 3390, ["S"], "hombre", "adulto");
const prod3 = new Producto ("prod3", "Buzo manga larga, varios colores, 100% algodón", "../assets/images/publ3.jpg", true, true, true, "ropa", "buzo", "blanco", "TOMMY HILFIGER", 2490, ["S"], "hombre", "adulto");
const prod4 = new Producto ("prod4", "Short de baño, varios diseños", "../assets/images/publ4.jpg", true, true, true, "ropa", "short", "blanco", "TOMMY HILFIGER", 1990, ["M"], "hombre", "adulto");
const prod5 = new Producto ("prod5", "Básicas manga corta, varios colores, 100% algodón", "../assets/images/publ5.jpg", true, true, true, "ropa", "remera", "azul", "TOMMY HILFIGER", 1390, ["S"], "hombre", "adulto");
const prod6 = new Producto ("prod6", "Básicas manga corta, varios colores, 100% algodón", "../assets/images/publ6.jpg", true, true, true, "ropa", "remera", "azul", "LACOSTE", 1390, ["S", "M", "L"], "hombre", "adulto");
const prod7 = new Producto ("prod7", "Remera estampada, varios diseños, 100% algodón", "../assets/images/publ7.jpg", true, true, true,  "ropa", "remera", "rojo", "TOMMY HILFIGER", 1390, ["S", "M", "L"], "hombre", "adulto");
const prod8 = new Producto ("prod8", "Remera COCODRILO manga corta blanca, 100% algodón", "../assets/images/publ8.jpg", true, true, true, "ropa", "remera", "blanco", "LACOSTE", 1390, ["S", "L"], "hombre", "adulto");
const prod9 = new Producto ("prod9", "Remera HILFIGER manga corta azul, 100% algodón", "../assets/images/publ9.jpg", true, true, true,  "ropa", "remera", "azul", "TOMMY HILFIGER", 1390, ["S"], "hombre", "adulto",);

productos.push(prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9)

