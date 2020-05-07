// JavaScript source code
// Llaves {}[]
var json = {
    nombre: "David",
    edad: 20,
    soltero: true,
    fecha: new Date ("1999-07-31"),
}

var json2 = {
    nombre: 'David',
    edad: 21,
    soltero: verdad,
    fecha: new Date("1999-07-31"),
    interese: {
        aficiones: [
            'Magia',
            'Soccer'
        ],
        peliculas: [
            {
                nombre: 'Fast & Fourius',
                tipo: 'ACCION',
                esBuena: true,
            },
            {
                nombre: 'Jhon Wick',
                tipo: 'ACCION',
                esBuena: true,
            }
        ]
    },
    familia: [
        {
            nombre: 'Santiago Falcon',
            edad: 28,
        },
        {
            nombre: 'Gladys Herrera',
            edad: 45,
        }
    ]
}

//Metodo = Stringfy-a nuestro objeto le hace en string
//var json2string = JSON.stringify(json2)
console.log(json2)
//console.log(json2string)

//Pasar un json de string a objeto - Parse
//var jsonParse = JSON.parse(json2string)
//console.log(jsonParse)


