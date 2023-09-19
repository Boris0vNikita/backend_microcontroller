const getRemovingIndicatorsModel = (sequelize, { DataTypes }) => {
    const RemovingIndicators = sequelize.define(
      "RemovingIndicators",
      {
        id_removingIndicators: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
          allowNull: false,
        },
        measurement: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        date: {
            type:DataTypes.DATE,
            allowNull: false,
        },
      },
      {
        schema: "Chat",
        tableName: "RemovingIndicators",
        createdAt: false,
        updatedAt: false,
        timestamps: false,
      }
    );
  
    return RemovingIndicators;
  };
  
  module.exports = getRemovingIndicatorsModel;
  