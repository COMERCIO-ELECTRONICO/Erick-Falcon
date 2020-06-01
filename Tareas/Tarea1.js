// JavaScript source code
// Llaves {}[]


json = {
    arreglos: {
        arreglo1: [2, 4, 5, 8, 6, 9, 10],
        arreglo2 : [{ valor: 1 }, { valor: 4 }, { valor: 2 }, { valor: 24 }, { valor: 100 }, { valor: 23 }, { valor: 45 }, { valor: 23 }]
    }
}



//ARREGLO NUMERO 1
var arregloM = json.arreglos.arreglo1
    .map(
        function (item, index, array) {
            return item * 2
        }
)
var pares = arregloM
    .filter(
        function (item, index, array) {
            if (item % 2 === 0) {
                return item
            }
        }
)

//ARREGLO NUMERO 2
var arregloImpar = json.arreglos.arreglo2
    .map(
        function (item, valor, array) {

            var dato = item.valor
            if (dato % 2 !== 0) {
                return dato
            }
            
        }
) 

var arregloS = json.arreglos.arreglo2
    .map(
        function (item, valor, array) {
            return item.valor + 2

        }
)

console.log("")
console.log("ARRAY 1")
console.log("Arreglo multiplicado por 2.")
console.log("--------------------------------")
console.log(arregloM)
console.log("")
console.log("Numeros pares.")
console.log("--------------------------------")
console.log(pares)
console.log("--------------------------------") 
console.log("")
console.log("ARRAY 2")
console.log("Numeros impares.")
console.log("--------------------------------")
console.log(arregloImpar)
console.log("")
console.log("Numeros sumados 2.")
console.log("--------------------------------")
console.log(arregloS)



