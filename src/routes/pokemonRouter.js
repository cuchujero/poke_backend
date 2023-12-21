const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');
const {requestAuthorization} = require('../middlewares/authorizationRequestMw');

router.get('/:id?',  requestAuthorization, pokemonController.getPokemons);

module.exports = router;