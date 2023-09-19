const RemovingIndicatorsService = require("../Services/RemovingIndicatorsService");

class RemovingIndicatorsController {
  // async createRemovingIndicators(req, res) {
  //   try {
  //     const { id_removingIndicators, id_paramsSensor, id_placementSensor,id_unit,measurement,date } = req.body;
  //     const removingIndicator = await RemovingIndicatorsService.create(id_removingIndicators, id_paramsSensor, id_placementSensor,id_unit,measurement,date);
  //     return res.status(200).json(removingIndicator);
  //   } catch (e) {
  //     return res.status(500).json(e.message);
  //   }
  // }

 
  async createDataSensor(req, res) {
    try {
        const { temperature, humidity} = req.body;
        const removingIndicator = await RemovingIndicatorsService.create(temperature, humidity);
        return res.status(200).json(removingIndicator);
      } catch (e) {
        return res.status(500).json(e.message);
      }
    
  }
  async getAll(req, res) {
    try {
      const removingIndicators = await RemovingIndicatorsService.getAll();
      return res.status(200).json(removingIndicators);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new RemovingIndicatorsController();
