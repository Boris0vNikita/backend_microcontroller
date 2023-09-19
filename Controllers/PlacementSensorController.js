const PlacementSensorService = require("../Services/PlacementSensorService");

class PlacementSensorController {
  async createPlacementSensor(req, res) {
    try {
      const { id_placementSensor, id_sensor, id_room,coordinates } = req.body;
      const placementSensor = await PlacementSensorService.create(id_placementSensor, id_sensor, id_room,coordinates);
      return res.status(200).json(placementSensor);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      const placementSensors = await PlacementSensorService.getAll();
      return res.status(200).json(placementSensors);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new PlacementSensorController();
