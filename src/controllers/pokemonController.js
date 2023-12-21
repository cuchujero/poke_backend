const pokemonServices = require('../services/pokemonServices'); 

const controller = {
	getPokemons: async (req, res)=> {
		res.json(await pokemonServices.getPokemons(req.params.id, req.query));
	}
};

module.exports = controller;