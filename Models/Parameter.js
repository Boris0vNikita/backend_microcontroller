const getParametrModel = (sequelize, { DataTypes }) => {
    const Parametr = sequelize.define(
      "Parametr",
      {
        id_parametr: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
          allowNull: false,
        },
  
        name_parametr: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        schema: "Chat",
        tableName: "Parametr",
        createdAt: false,
        updatedAt: false,
        timestamps: false,
      }
    );
  
    return Parametr;
  };
  
  module.exports = getParametrModel;
  