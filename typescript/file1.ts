//tipo de datos
//Llaves{}[]
const nombre: string = "David";
const numero: number = 2;
const bool: boolean = true;
const objetoUsuario: object = {
    nombre: "David",

};

//Arreglos
const arregloUno: Array<number> = [];
const arregloDos: object[] = [];

//varios tipados
const nombreDo: (string | number) = "";
const arreglo1: Array<boolean | number> = [];
const arreglo2: Array<string | object> = [];

//
let variableLet: number;
//variable any - cualquier tipo de dato
let cualquierVariable: any;
//funciones
//? - variable opcional
function sumar(num1?: number, num2?: number): number {
    let a = 2;
    let b = 3;
    if (num1) {
        a = num1;
    };
    if (num2) {
        b = num2;
    };
    return a+b ;
};

sumar(5, 5);
sumar(5);
sumar();
console.log(sumar(5, 5));

class Persona {
    constructor(
        protected nombre?: string,
        public apellido?: string
    ) {
    }
}

