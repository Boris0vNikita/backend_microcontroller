const { ParamsSensor } = require("../Models");
const { Parametr } = require("../Models");
const { Sensor } = require("../Models");

class ParamsSensorService {

    async create(id_paramsSensor, id_parametr,id_sensor,name ,inaccuracy) {
            const parametr = await Parametr.findByPk(id_parametr)
            const sensor = await Sensor.findByPk(id_sensor)
            if (!sensor && !parametr){
            throw new Error("Нет данных пареметров или датчика");
            }
            //const createSensor = await Sensor.create({name,inaccuracy})
            //const createSensor = await Sensor.create({name,inaccuracy})
            console.log(createSensor);
            const createdParamsSensor = await ParamsSensor.create({ 
                id_paramsSensor, 
                id_parametr,
                id_sensor
                //id_sensor:createSensor.id_sensor 
            })
            return createdParamsSensor
        }
        
        async getAll() {
            const paramsSensors = await ParamsSensor.findAll()
            return paramsSensors
        }
        
        // async updateStatus(name_status, id_statement) {
        //   const status = await StatusService.getStatusByName(name_status)
        //   const statement = await Statements.findByPk(id_statement)
        //   statement.id_status = status.id_status
        //   await statement.save()
        //   return statement
        // }

}

module.exports = new  ParamsSensorService()