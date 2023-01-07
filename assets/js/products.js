// PRODUCTOS

const prod1 = {
    recomendado: true,
    masVendido: true,
    novedad: true,
    categoria: "ropa",
    tipo: "remera",
    color: "azul",
    marca: "tommy hilfiger",
    precio: 1390,
    tamaño: "s",
    sexo: "hombre",
    edad: "adulto",
}

const prod2 = {
    recomendado: true,
    masVendido: true,
    novedad: true,
    categoria: "ropa",
    tipo: "buzo",
    color: "negro",
    marca: "tommy hilfiger",
    precio: 3390,
    tamaño: "s",
    sexo: "hombre",
    edad: "adulto",
}

const prod3 = {
    recomendado: true,
    masVendido: true,
    novedad: true,
    categoria: "ropa",
    tipo: "buzo",
    color: "blanco",
    marca: "tommy hilfiger",
    precio: 3390,
    tamaño: "s",
    sexo: "hombre",
    edad: "adulto",
}

const prod4 = {
    recomendado: true,
    masVendido: true,
    novedad: true,
    categoria: "ropa",
    tipo: "buzo",
    color: "blanco",
    marca: "tommy hilfiger",
    precio: 2490,
    tamaño: "s",
    sexo: "hombre",
    edad: "adulto",
}

const prod5 = {
    recomendado: true,
    masVendido: true,
    novedad: true,
    categoria: "ropa",
    tipo: "short",
    color: "blanco",
    marca: "tommy hilfiger",
    precio: 1990,
    tamaño: "m",
    sexo: "hombre",
    edad: "adulto",
}

const prod6 = {
    recomendado: true,
    masVendido: true,
    novedad: true,
    categoria: "ropa",
    tipo: "remera",
    color: "azul",
    marca: "tommy hilfiger",
    precio: 1390,
    tamaño: "s",
    sexo: "hombre",
    edad: "adulto",
}

const prod7 = {
    recomendado: true,
    masVendido: true,
    novedad: true,
    categoria: "ropa",
    tipo: "remera",
    color: "azul",
    marca: "lacoste",
    precio: 1390,
    tamaño: ["s", "m", "L"],
    sexo: "hombre",
    edad: "adulto",
}

    //Función CONSTRUCTORA
class Producto {
    constructor(recomendado, masVendido, novedad, categoria, tipo, color, marca, precio, tamaño, sexo, edad) {
        this.recomendado = recomendado
        this.masVendido = masVendido
        this.novedad = novedad
        this.categoria = categoria
        this.tipo = tipo
        this.color = color
        this.marca = marca
        this.precio = precio
        this.tamaño = tamaño
        this.sexo = sexo
        this.edad = edad

        // Método
        this.descuentoIva = function (precio) {
            this.precio = precio - (precio * 0.22)
            console.log("Este " + this.tipo + " con el descuento del IVA cuesta ahora " + this.precio)
        }
    }
}

// Aplicando Función CONSTRUCTORA
const prod8 = new Producto(false, false, false, "ropa", "buzo", "blanco", "lacoste", 3390, "s", "mujer", "adulto")
const prod9 = new Producto(false, false, true, "ropa", "buzo", "blanco", "polo", 3390, "m", "hombre", "adulto")

// Aplicando el Método
const prod8SinIva = prod8.descuentoIva(prod8.precio)