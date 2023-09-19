const RoomService = require("../Services/RoomService");

class RoomController {
  async createRoom(req, res) {
    try {
      const { name_room } = req.body;
      const room = await RoomService.create(name_room);
      if (!name_room) {
        return res
          .status(500)
          .json({ message: "Название помещения не указано" });
      }
      return res.status(200).json(room);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      const rooms = await RoomService.getAll();
      return res.status(200).json(rooms);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new RoomController();
