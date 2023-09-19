const UnitService = require("../Services/UnitService");

class UnitController {
  async createUnit(req, res) {
    try {
      const { name } = req.body;
      const unit = await UnitService.create(name);
      if (!name) {
        return res
          .status(500)
          .json({ message: "Название  не указано" });
      }
      return res.status(200).json(unit);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      const units = await UnitService.getAll();
      return res.status(200).json(units);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new UnitController();
