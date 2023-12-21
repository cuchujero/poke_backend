const typeServices = require('../services/typeServices'); 

const controller = {
	getTypes: async (req, res)=> {
		res.json(await typeServices.getTypes(req.params.id));
	}
};

module.exports = controller;