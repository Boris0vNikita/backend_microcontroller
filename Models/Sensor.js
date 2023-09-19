const getSensorModel = (sequelize, { DataTypes }) => {
  const Sensor = sequelize.define(
    "Sensor",
    {
      id_sensor: {
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
      inaccuracy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    },
    {
      schema: "Chat",
      tableName: "Sensor",
      createdAt: false,
      updatedAt: false,
      timestamps: false,
    }
  );

  return Sensor;
};

module.exports = getSensorModel;
