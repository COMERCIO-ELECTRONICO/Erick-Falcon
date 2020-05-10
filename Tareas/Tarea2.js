// JavaScript source code
// Llaves {}[]

var materia = "COMERCIO ELECTRONICO"
var texto = "Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog - M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores.Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido(que combina detección de fase y contraste) de una función de Superresolución que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles(con más detalle)."

//Quitar caractees especiales



//Palabra invertida
var palabraInvertida = materia.split("").reverse().join("")

//Primera palabra en mayuscula
function palabraMayus() {
    var palabraUno = texto.split(" ").slice(0, 1).join("")
    return palabraUno.toLocaleUpperCase()
}

//////////////////////////////////////////////////////////////////

//Ultima palabra en mayuscula
function ultimaMayus() {
    var palabraDos = texto.split(" ").slice(135, 136).join("")
    return palabraDos.toLocaleUpperCase()
}




console.log("")
console.log("Palabras invertidas.")
console.log("--------------------------------")
console.log(palabraInvertida)
console.log("")
console.log("Primera palabra en mayuscula")
console.log("--------------------------------")
console.log(palabraMayus())
console.log("")
console.log("Ultima palabra en mayuscula")
console.log("--------------------------------")
console.log(ultimaMayus())
console.log("")
console.log("Numero de comas")
console.log("--------------------------------")
console.log(texto.split(",").length)
console.log("")
console.log("Numero de puntos")
console.log("--------------------------------")
console.log(texto.split(".").length)
console.log("")











