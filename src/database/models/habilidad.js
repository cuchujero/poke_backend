function habilidadData(sequelize, DataTypes){

    const table = 'Habilidad';
  
    const cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      nombre: { type: DataTypes.STRING, allowNull: false }
    };
  
    const config = {camelCase: false, timestamps: false, tableName: 'Habilidad'}; 
  
    const habilidad = sequelize.define(table,cols,config);
  
    habilidad.associate = function(models){
  
        habilidad.belongsToMany(models.Pokemon, {
          as: "pokemon_habilidad",
          through: "Pokemon_Habilidad", 
          foreignKey: "habilidad_id", 
          otherKey: "pokemon_id",
          timestamps: false
        });
  
    }
  
    return habilidad;
    
  }
  
  module.exports = habilidadData;
  