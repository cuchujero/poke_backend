function movimientoData(sequelize, DataTypes){

    const table = 'Movimiento';
  
    const cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      nombre: { type: DataTypes.STRING, allowNull: false }
    };
  
    const config = {camelCase: false, timestamps: false, tableName: 'Movimiento'}; 
  
    const movimiento = sequelize.define(table,cols,config);
  
    movimiento.associate = function(models){
 
        movimiento.belongsToMany(models.Pokemon, {
          as: "pokemon_movimiento",
          through: "Pokemon_Movimiento", 
          foreignKey: "movimiento_id", 
          otherKey: "pokemon_id",
          timestamps: false
        });
  
    }
  
    return movimiento;
    
  }
  
  module.exports = movimientoData;
  