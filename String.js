// JavaScript source code
//// Llaves {}[]
var nombre = "Madison"
console.log(nombre.length)
console.log(nombre.indexOf("a"))
console.log(nombre.search("d"))
console.log(nombre.slice(0, 4))
console.log(nombre.substr(0, 4))
console.log(nombre.toLocaleUpperCase())
var texto = "Hola mundo "
console.log(texto.replace("Hola", "hello"))
console.log(texto.concat(" ", nombre))
console.log(` $ { texto } mas mi nombre: $ { nombre } `)
console.log(texto.trim())
console.log(texto.split(''))
console.log(nombre.charAt(4))

const invertirCadena = cadena => cadena.split("").reverse().join("");

let cadena = "Comercio Electronico";
console.log("Cadena:", invertirCadena(texto));