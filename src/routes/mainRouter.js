
const express = require('express');
const router = express.Router();
const pokemonRouter = require('./pokemonRouter'); 
const typeRouter = require('./typeRouter');
const moveRouter = require('./moveRouter');

router.get('/test', async (req, res)=> { res.json({code: 200, message: 'works'}); },); 
router.use('/pokemons', pokemonRouter); 
router.use('/tipos', typeRouter); 
router.use('/movimientos', moveRouter); 

module.exports = router;
