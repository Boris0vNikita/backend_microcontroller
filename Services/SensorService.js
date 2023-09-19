const { Sensor } = require("../Models");
const { Parametr } = require("../Models");
const { Room } = require("../Models");
const { PlacementSensor } = require("../Models");
const { ParamsSensor } = require("../Models");

class SensorService {
  async create(name, inaccuracy,name_room,id_parametr,coordinates) {
    if (!name || !inaccuracy|| !name_room|| !id_parametr|| !coordinates) {
      throw new Error("Входные данные не могут быть нулевыми!");
    }

    const createRoom = await Room.create({name_room})
    //const createParametr = await Parametr.create({name_parametr})
    
    const createdSensor = await Sensor.create({
      name,
      inaccuracy,
    });
    const createParamSensor = await ParamsSensor.create({id_parametr,id_sensor:createdSensor.id_sensor})
    const createPlacementSensor = await PlacementSensor.create({coordinates,id_sensor:createdSensor.id_sensor,id_room:createRoom.id_room})
    return createdSensor,createParamSensor,createPlacementSensor;
  }

  async getAll() {
    const sensors = await Sensor.findAll();
    return sensors;
  }
  async getById(id_sensor) {
    const sensor = await Sensor.findByPk( id_sensor );
    return sensor;
  }
}

module.exports = new SensorService();
