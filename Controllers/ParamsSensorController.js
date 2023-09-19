const ParamsSensorService = require("../Services/ParamsSensorService");

class ParamsSensorController {
  async createParamsSensor(req, res) {
    try {
      const { id_paramsSensor, id_parametr,id_sensor } = req.body;
      const paramsSensor = await ParamsSensorService.create(id_paramsSensor, id_parametr,id_sensor);
      // const { id_paramsSensor, id_parametr,id_sensor,name ,inaccuracy } = req.body;
      // const paramsSensor = await ParamsSensorService.create(id_paramsSensor, id_parametr,id_sensor,name ,inaccuracy);

      return res.status(200).json(paramsSensor);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      const paramsSensors = await ParamsSensorService.getAll();
      return res.status(200).json(paramsSensors);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new ParamsSensorController();
