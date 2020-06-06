/**
 * Productos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre_pro: {type: 'string', required: true},
    descripcion_pro: {type: 'string', required: true},
    precio_pro: {type: 'number', required: true},
    imagen: {type: 'string', required: true}
  },

};

