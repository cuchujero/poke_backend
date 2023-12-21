function pokemonData(sequelize, DataTypes){

  const table = 'Pokemon';

  const cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false },
    altura: { type: DataTypes.STRING, allowNull: false },
    peso: { type: DataTypes.STRING, allowNull: false },
    habitat: { type: DataTypes.STRING, allowNull: false },
    tasa_crecimiento: { type: DataTypes.STRING, allowNull: false },
    tasa_captura: { type: DataTypes.STRING, allowNull: false },
    pre_evolucion: { type: DataTypes.INTEGER, allowNull: true }, 
    evolucion: { type: DataTypes.INTEGER, allowNull: true },
    color_id: { type: DataTypes.INTEGER, allowNull: false }, 
  };

  const config = {camelCase: false, timestamps: false, tableName: 'Pokemon'}; 

  const pokemon = sequelize.define(table,cols,config);

  pokemon.associate = function(models){

      pokemon.hasMany(models.Imagen, {   
        as: "imagenes",
        foreignKey: "pokemon_id"
      });

      pokemon.belongsTo(models.Color, {   
        as: "color",
        foreignKey: "color_id"
      });

      pokemon.belongsTo(models.Pokemon, {   
        as: "pre_evo",
        foreignKey: "pre_evolucion"
      });

      pokemon.belongsToMany(models.Tipo, {
        as: "pokemon_tipo",
        through: "Pokemon_Tipo", 
        foreignKey: "pokemon_id", 
        otherKey: "tipo_id",
        timestamps: false
      });

      pokemon.belongsToMany(models.Movimiento, {
        as: "pokemon_movimiento",
        through: "Pokemon_Movimiento", 
        foreignKey: "pokemon_id", 
        otherKey: "movimiento_id",
        timestamps: false
      });

      pokemon.belongsToMany(models.Habilidad, {
        as: "pokemon_habilidad",
        through: "Pokemon_Habilidad", 
        foreignKey: "pokemon_id", 
        otherKey: "habilidad_id",
        timestamps: false
      });

  }

  return pokemon;
  
}

module.exports = pokemonData;
