const { Room } = require("../Models");

class RoomService {
  async create(name_room) {
    if (!name_room) {
      throw new Error("Название помещения не может быть нулевым");
    }

    const room = await Room.findOne({ where: { name_room } });
    if (room) {
      throw new Error(`Такое помещение ${name_room} уже есть`);
    }

    const createdRoom = await Room.create({name_room});
    return createdRoom;
  }

  async getAll() {
    const rooms = await Room.findAll();
    return rooms;
  }

}

module.exports = new RoomService();
