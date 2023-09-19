const getRoomModel = (sequelize, { DataTypes }) => {
    const Room = sequelize.define(
      "Room",
      {
        id_room: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
          allowNull: false,
        },
  
        name_room: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        schema: "Chat",
        tableName: "Room",
        createdAt: false,
        updatedAt: false,
        timestamps: false,
      }
    );
  
    return Room;
  };
  
  module.exports = getRoomModel;
  