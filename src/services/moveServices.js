const bd = require('../database/models'); 

const services = {
    getMoves: async (moveId) => {
        return moveId? bd.Movimiento.findByPk(moveId) : bd.Movimiento.findAll();
    }
}


module.exports = services;