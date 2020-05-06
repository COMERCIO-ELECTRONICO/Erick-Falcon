// JavaScript source code
// Llaves {}[]
var json = {
    nombre: "David",
    edad: 20,
    soltero: true,
    fecha: new Date ("1999-07-31"),
}

json.nombre = "nuevo"
json.direccion = "Ajavi y Mariscal Sucre"
delete json.direccion
console.log(json)