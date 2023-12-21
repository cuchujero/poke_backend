const bd = require('../database/models'); 

const services = {
    getTypes: async (TypeId) => {
        return TypeId? bd.Tipo.findByPk(TypeId) : bd.Tipo.findAll();
    }
}


module.exports = services;