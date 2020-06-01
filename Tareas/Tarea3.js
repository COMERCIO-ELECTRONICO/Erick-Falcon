// JavaScript source code
//Llaves {}[]
console.log("----------------------------------------")
console.log("USUARIOS")
console.log("----------------------------------------")
var json = [
    {
        nombre: 'David',
        edad: "20",
        Fecha_Nacimiento: "1999/07/31",
        Telf: '0983530541',
    },
    {
        nombre: 'Juan',
        edad: "34",
        Fecha_Nacimiento: "1994/01/23",
        Telf: '0983453452',
    } 
]

console.log(json)
console.log("----------------------------------------")

//Ingresar datos

function anadirDatos(arreglo, datos, indice, cb) {
    arreglo[indice] = datos
    cb({
        mensaje: "Datos Ingresados correctamente",
        arreglo
    }
    )
    }
   


//Editar datos
function editarDatos(arreglo, datos, indice, cb) {
    arreglo[indice] = datos
    cb({
        mensaje: "Datos Editados correctamente",
        arreglo
    }
    )
}

//Listar datos
function listarDatos(arreglo, cb) {
    arreglo.forEach( user =>{
        console.log(user)
    })
    cb({
        mensaje: "Datos enlistados"
    })
}

//Eliminar datos
function eliminarDatos(arreglo, datos, indice, cb) {
    arreglo[indice] = datos
    cb({
        mensaje: "Datos Eliminados correctamente",
        arreglo
    }
    )
}


console.log("INGRESAR CAMPOS")
console.log("----------------------------------------")
console.log("")
/*-------------------------------------------------------------------------*/
//AÑADIR DATOS

anadirDatos(json, { nombre: "David", edad: "20", Fecha_Nacimiento: "1999/07/31", Telf: "0983530541"}, 0, (mensaje) => {
    console.log(mensaje)
})


console.log("----------------------------------------")
console.log("EDITAR CAMPOS")
console.log("----------------------------------------")
console.log("")
/*-------------------------------------------------------------------------*/
//EDITAR DATOS


 editarDatos(json, { nombres: "", edad: "", Fecha_Nacimiento: "", Telf: "" }, 2, (mensaje) => {
    console.log(mensaje)
})



/*-------------------------------------------------------------------------*/
console.log("----------------------------------------")
console.log("ENLISTAR CAMPOS")
console.log("----------------------------------------")
console.log("")
////ENLISTAR DATOS


listarDatos(json, (mensaje) => { console.log(mensaje) })


console.log("----------------------------------------")
console.log("ELIMINAR CAMPOS")
console.log("----------------------------------------")
console.log("")
///ELIMINAR DATOS

eliminarDatos(json, "CAMPO ELIMINADO" , 0, (mensaje) => {
    console.log(mensaje)
})
