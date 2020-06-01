//tipo de datos
//Llaves{}[]
var nombre = "David";
var numero = 2;
var bool = true;
var objetoUsuario = {
    nombre: "David"
};
//Arreglos
var arregloUno = [];
var arregloDos = [];
//varios tipados
var nombreDo = "";
var arreglo1 = [];
var arreglo2 = [];
//
var variableLet;
//variable any - cualquier tipo de dato
var cualquierVariable;
//funciones
//? - variable opcional
function sumar(num1, num2) {
    var a = 2;
    var b = 3;
    if (num1) {
        a = num1;
    }
    ;
    if (num2) {
        b = num2;
    }
    ;
    return a + b;
}
;
sumar(5, 5);
sumar(5);
sumar();
console.log(sumar(5, 5));
