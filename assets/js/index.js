swal({
  title: "¡Bienvenido!",
  text: "Esto es una DEMO de proyecto para los cursos de Desarrollo Web y JavaScript de CODERHOUSE. Para ir directamente a la página de la tienda y testear el proyecto seleccione la opción correspondiente. De lo contrario seleccione CONTINUAR para ver la DEMO por completo.",
  icon: "info",
  buttons: ["CONTINUAR", "IR A TIENDA"],
}).then((irATienda) => {
  if (irATienda) {
    location.href ="../pages/tienda.html";
  }
});
