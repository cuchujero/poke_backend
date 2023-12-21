const moveServices = require('../services/moveServices'); 

const controller = {
	getMoves: async (req, res)=> {
		res.json(await moveServices.getMoves(req.params.id));
	}
};

module.exports = controller;