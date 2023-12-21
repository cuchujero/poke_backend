const bd = require('../database/models'); 

const services = {
    getPokemons: async (pokemonId, queryString) => {

        if (queryString && queryString.limit){
            return bd.Pokemon.findAll(
                {limit: parseInt(queryString.limit), 
                include: [
                {association: 'imagenes'},
                {association: 'pokemon_tipo'},
                {association: 'pre_evo'}
            ]});
        }

        return pokemonId? 
        bd.Pokemon.findByPk(pokemonId,{
            include: [
            {association: 'color'},
            {association: 'imagenes'},
            {association: 'pokemon_tipo'},
            {association: 'pokemon_movimiento'},
            {association: 'pokemon_habilidad'},
            {association: 'pre_evo'}
        ]}) : bd.Pokemon.findAll({
            include: [
            {association: 'imagenes'},
            {association: 'pokemon_tipo'},
            {association: 'pre_evo'}
        ]});
    }
}


module.exports = services;