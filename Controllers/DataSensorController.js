const RemovingIndicatorsService = require("../Services/RemovingIndicatorsService");

class DataSensorController {
  async createDataSensor(req, res) {
    try {
        const { temperature, humidity} = req.body;
        const removingIndicator = await RemovingIndicatorsService.create(temperature, humidity);
        return res.status(200).json(removingIndicator);
      } catch (e) {
        return res.status(500).json(e.message);
      }
    
  }
}

module.exports = new DataSensorController();
