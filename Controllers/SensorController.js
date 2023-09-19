const SensorService = require("../Services/SensorService.js");

class SensorController {
  async createSensor(req, res) {
    try {
      const { name, inaccuracy,name_room,id_parametr,coordinates } = req.body;
      const sensor = await SensorService.create(name, inaccuracy,name_room,id_parametr,coordinates);
      if (!name & !inaccuracy) {
        return res
          .status(500)
          .json({ message: "Данная погрешность и название датчика не указано" });
      }
      return res.status(200).json(sensor);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      const sensors = await SensorService.getAll();
      return res.status(200).json(sensors);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getById(req, res) {
    try {
      const id = req.params.id
      const sensor = await SensorService.getById(id);
      return res.status(200).json(sensor);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new SensorController();
