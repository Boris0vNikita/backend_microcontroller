const { Unit } = require("../Models");


class UnitService {
  async create(name) {
    if (!name) {
      throw new Error("Название единицы измерения не может быть нулевым");
    }

    const unit = await Unit.findOne({ where: { name } });
    if (unit) {
      throw new Error(`Такая единица  измерения ${name} уже есть`);
    }

    const createdUnit = await Unit.create({name});
    return createdUnit;
  }

  async getAll() {
    const units = await Unit.findAll();
    return units;
  }

}

module.exports = new UnitService();
