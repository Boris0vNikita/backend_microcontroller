const { PlacementSensor } = require("../Models");
const { Room } = require("../Models");
const { Sensor } = require("../Models");

class PlacementSensorService {

    async create(id_placementSensor, id_sensor, id_room,coordinates) {

            const room = await Room.findByPk(id_room)
            const sensor = await Sensor.findByPk(id_sensor)
            if (!sensor && !room){
            throw new Error("Нет данных помещения или датчика");
            }
            const createdPlacementSensor = await PlacementSensor.create({ id_placementSensor,id_sensor, id_room,coordinates })
            return createdPlacementSensor
        }
        
        async getAll() {
            const placementSensors = await PlacementSensor.findAll()
            return placementSensors
        }
        
        

}

module.exports = new  PlacementSensorService()