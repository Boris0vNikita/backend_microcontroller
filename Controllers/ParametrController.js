const ParametrService = require("../Services/ParametrService");

class ParametrController {
  async createParametr(req, res) {
    try {
      const { name_parametr } = req.body;
      const parametr = await ParametrService.create(name_parametr);
      if (!name_parametr) {
        return res
          .status(500)
          .json({ message: "Название  не указано" });
      }
      return res.status(200).json(parametr);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      const parametrs = await ParametrService.getAll();
      return res.status(200).json(parametrs);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new ParametrController();
