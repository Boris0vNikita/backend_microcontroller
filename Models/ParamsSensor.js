const getParamsSensorModel = (sequelize, { DataTypes }) => {
    const ParamsSensor = sequelize.define(
      "ParamsSensor",
      {
        id_paramsSensor: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
          allowNull: false,
        },
  
      },
      {
        schema: "Chat",
        tableName: "ParamsSensor",
        createdAt: false,
        updatedAt: false,
        timestamps: false,
      }
    );
  
    return ParamsSensor;
  };
  
  module.exports = getParamsSensorModel;
  