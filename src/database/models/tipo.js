function tipoData(sequelize, DataTypes){

    const table = 'Tipo';
  
    const cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      nombre: { type: DataTypes.STRING, allowNull: false }
    };
  
    const config = {camelCase: false, timestamps: false, tableName: 'Tipo'}; 
  
    const tipo = sequelize.define(table,cols,config);
  
    tipo.associate = function(models){

        tipo.belongsToMany(models.Pokemon, {
          as: "pokemon_tipo",
          through: "Pokemon_Tipo", 
          foreignKey: "tipo_id", 
          otherKey: "pokemon_id",
          timestamps: false
        });

    }
  
    return tipo;
    
  }
  
  module.exports = tipoData;
  