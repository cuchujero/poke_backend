function colorData(sequelize, DataTypes){

  const table = 'Color';

  const cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false }
  };

  const config = {camelCase: false, timestamps: false, tableName: 'Color'}; 

  const color = sequelize.define(table,cols,config);

  color.associate = function(models){

      color.hasMany(models.Pokemon, {   
        as: "pokemons",
        foreignKey: "color_id"
      });

  }

  return color;
  
}

module.exports = colorData;
