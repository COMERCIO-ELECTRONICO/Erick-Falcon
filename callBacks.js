// JavaScript source code
//Llaves {}[]
//API
//Programacion funcional

function primeraFuncion() {
    setTimeout(() => {
        console.log("primera")

    }, 500)


}

function segundaFuncion() {
    console.log("2")

}
//primeraFuncion()
//segundaFuncion()



function saludar(nombre, callback) {
    console.log("Saludo", nombre)
    callBack()
}

function callBack() {
    console.log("Ya saluda")
}

saludar("David", callBack)
