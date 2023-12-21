function imagenData(sequelize, DataTypes){

  const table = 'Imagen';

  const cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: false },
    pokemon_id: {  type: DataTypes.INTEGER, allowNull: false }
  };

  const config = {camelCase: false, timestamps: false, tableName: 'Imagen'}; 

  const imagen = sequelize.define(table,cols,config);

  imagen.associate = function(models){

      imagen.belongsTo(models.Pokemon, {   
        as: "pokemon",
        foreignKey: "pokemon_id"
      });

  }

  return imagen;
  
}

module.exports = imagenData;
