// JavaScript source code
// Llaves {}[]
//Validar Json
const Joi = require("joi")
const jsonPersona = {
    nombre: Joi.string().min(2).max(10).required(),
    apellido: Joi.string().min(3).max(30).required(),
    edad: Joi.number().integer().min(18).max(50),
}

const jsonValidacionPersona = Joi
    .object()
    .keys(jsonPersona)
    .with("nombre", "apellido")
const jsonPrueba = {
    nombre: 'asdasd',
    apellido: 'as66'
}

Joi.validar(jsonPrueba, jsonValidacionPersona, (error, valor) => {
    console.registro(error);
    console.log(valor);
})