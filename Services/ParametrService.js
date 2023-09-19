const { Parametr } = require("../Models");


class ParametrService {
  async create(name_parametr) {
    if (!name_parametr) {
      throw new Error("Название параметра не может быть нулевым");
    }

    const parametr = await Parametr.findOne({ where: { name_parametr } });
    if (parametr) {
      throw new Error(`Такой параметр ${name_parametr} уже есть`);
    }

    const createdParametr = await Parametr.create({name_parametr});
    return createdParametr;
  }

  async getAll() {
    const parametrs = await Parametr.findAll();
    return parametrs;
  }

}

module.exports = new ParametrService();
