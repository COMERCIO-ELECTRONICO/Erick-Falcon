// JavaScript source code
// Llaves {}[]

//Arreglos

var arregloNumero = [1,2,3,4,5,6,7,8,9]
console.log(arregloNumero)

//IndexOf
console.log(arregloNumero.indexOf(1))

//Añadir elementos, Push
console.log(arregloNumero.push(10))
console.log(arregloNumero)

//Slice y Splite
//Slice - Divide el vector original
var arregloSlice = arregloNumero.slice(0, 2)
console.log(arregloSlice)

//Splice - Permite eliminar elementos de un arreglo
var arregloSplice = arregloNumero.splice(2, 1)
console.log(arregloSplice)
console.log(arregloNumero)

//Pop - Elimina el ultimo elemento
console.log(arregloNumero.pop)
console.log(arregloNumero)

//Map - Muta el arreglo o lo modifica
var arregloMutado = arregloNumero
    .map(
        (item, indice, arreglo) => {
            console.log(item)
            if (item === 2) {
                return item + 2
            }
            return item + 1
        }
)
console.log(arregloMutado)

//Filter  - retorna un arreglo con una condicion
var arregloFilter = arregloNumero
    .filter(
        (item, valor, arreglo) => {
            return item === 3
        }
)
console.log(arregloFilter)

//find - retorna un valor
var arregloFind = arregloNumero
    .find(
        (item, valor, arreglo) => {
            return item === 1
        }
)
console.log(arregloFind)

//Every y some
//Every - Verifica si todos los valores cumplen con una condicion 
// true, false
// Eome verifica si almenos uno cumplen una condicion 
var operadoresMapyFilter = arregloNumero
    .map(
        (item) => {
            return item * 2;
        }
    ).filter(
        (item) => {
            return item == 4
        }
)

//SIRVE COMO UN ACUMULADOR, LO PODEMOS HACER CON UN ARREGLO
var arregloReduce = [2, 1, 11, 3, 45]
var valorSumaArreglo = arregloReduce

    .reduce(
        
        (acumulador, item, indice, array) => {
            return acumulador + item
        }, 0
)
console.log(valorSumaArreglo)