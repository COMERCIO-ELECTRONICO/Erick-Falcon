//interfaz
//Llaves {|}[]
interface persona {
    nombre: string,
    apellido: string,
    edad: number,
    esSoltero: boolean
};

interface correo {
    email?: string
};

interface trabajo extends correo, persona{
    nombreTrabajo: string
};

const policia: trabajo = {
    apellido: "",
    edad: 1,
    esSoltero: false,
    nombre: "Juan",
    nombreTrabajo: ""
};

const valor = 1;
//CASTEO
//AS
//valor as number;
//<tipoDato>Variable
<number>valor