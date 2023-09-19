const getUnitModel = (sequelize, { DataTypes }) => {
    const Unit = sequelize.define(
      "Unit",
      {
        id_unit: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
          allowNull: false,
        },
  
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        schema: "Chat",
        tableName: "Unit",
        createdAt: false,
        updatedAt: false,
        timestamps: false,
      }
    );
  
    return Unit;
  };
  
  module.exports = getUnitModel;
  