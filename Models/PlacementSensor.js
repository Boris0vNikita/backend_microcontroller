const getPlacementSensorModel = (sequelize, { DataTypes }) => {
    const PlacementSensor = sequelize.define(
      "PlacementSensor",
      {
        id_placementSensor: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
          allowNull: false,
        },
        coordinates: {
            type: DataTypes.STRING,
          },
      },
      {
        schema: "Chat",
        tableName: "PlacementSensor",
        createdAt: false,
        updatedAt: false,
        timestamps: false,
      }
    );
  
    return PlacementSensor;
  };
  
  module.exports = getPlacementSensorModel;
  