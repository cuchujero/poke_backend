const axios = require('axios');
const bd = require('./database/models'); 

async function chargeData(){
    try {

        for (let pokemonNumber=1; pokemonNumber<300; pokemonNumber++){

          const firstResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
          const secondResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}`);
        
          const pokemonGeneralData = firstResponse.data;
          const pokemonSpeciesData = secondResponse.data;

          const {height, weight, sprites, abilities, moves, types} = pokemonGeneralData;
          const {name, evolves_from_species, capture_rate, growth_rate, color, habitat} = pokemonSpeciesData;

          const [colorCreado] = await bd.Color.findOrCreate({
            where: { nombre: color.name },
            defaults: { nombre: color.name },
          })

          let pokemon_previo = null;

          if (evolves_from_species){
            pokemon_previo = await bd.Pokemon.findOne({
            where: { nombre: evolves_from_species.name },
            })
          }

          const pokemonCreado = await bd.Pokemon.create({
            nombre: name,
            altura: height,
            peso: weight,
            habitat: habitat.name,
            tasa_crecimiento: growth_rate.name,
            pre_evolucion: pokemon_previo? pokemon_previo.id : null,
            evolucion: null,
            tasa_captura: capture_rate,
            color_id: colorCreado.id
          })

          bd.Imagen.create({
            url: sprites.front_default,
            pokemon_id: pokemonCreado.id
          })

          for (let element of types){
            const [tipoCreado] = await bd.Tipo.findOrCreate({
              where: { nombre: element.type.name },
              defaults: { nombre: element.type.name },
            })
            pokemonCreado.addPokemon_tipo(tipoCreado);
          }

          for (let element of abilities){
            const [habilidadCreada] = await bd.Habilidad.findOrCreate({
              where: { nombre: element.ability.name },
              defaults: { nombre: element.ability.name },
            })
            pokemonCreado.addPokemon_habilidad(habilidadCreada);
          }

          for (let element of moves){
            const [movimientoCreado] = await bd.Movimiento.findOrCreate({
              where: { nombre: element.move.name },
              defaults: { nombre: element.move.name },
            })
            pokemonCreado.addPokemon_movimiento(movimientoCreado);
          }

        }
        
      console.log('Datos cargados');

      } catch (error) {
        console.error('Api error:', error.message);
      }
}

module.exports = {chargeData}