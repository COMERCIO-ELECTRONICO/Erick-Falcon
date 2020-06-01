// JavaScript source code
//Llaves {}[]
//API
//Programacion funcional

/*function primeraFuncion() {
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


function saludar2(nombre) {
    console.log(`ejecuto saludo a ${nombre}`)
    return nombre
}*/


/*var arreglo = ['juan', 'juan', 'juan', 'juan']
var nombreNuevo = 'juan'


function  anadirNombre(arreglo, nombre, indice, cb)  {
    arreglo[indice] = nombre
    cb(
        {
            mensaje: 'exito',
            arreglo
        }
    )
}
anadirNombre(arreglo, 'DAVID', 4, (mensaje) => {


    console.log(mensaje);
})*/

var arregloUsuario = [1, 2, 3, 4, 5]

function listarUsuario(arreglo, cb) {
    arreglo
        .forEach(
            usuario => {
                console.log(usuario);
            });
    cb({
        mensaje: 'lista de usuario'
    })
}

listarUsuario(arregloUsuario, (respuestaMensaje) => {
    console.log(respuestaMensaje);
})










