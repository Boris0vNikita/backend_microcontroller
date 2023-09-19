const { RemovingIndicators } = require("../Models");
const { PlacementSensor } = require("../Models");
const { ParamsSensor } = require("../Models");
const { Unit } = require("../Models");

class RemovingIndicatorsService {

    // async create(id_removingIndicators, id_paramsSensor, id_placementSensor,id_unit,measurement) {

    //         const now = new Date()
    //         const d2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 5, now.getMinutes(), now.getSeconds(), now.getMilliseconds())
            
    //         const placementSensor = await PlacementSensor.findByPk(id_placementSensor)
    //         const paramsSensors = await ParamsSensor.findByPk(id_paramsSensor)
    //         const unit = await Unit.findByPk(id_unit)
    //         if (!placementSensor && !paramsSensors && unit){
    //         throw new Error("Нет данных характеристи датчика или расположения датчика или единиц измерения");
    //         }
    //         const createdRemovingIndicators = await RemovingIndicators.create({id_removingIndicators, id_paramsSensor, id_placementSensor,id_unit,measurement,date:d2})
    //         return createdRemovingIndicators
    //     }
    async create(temperature, humidity) {
        const now = new Date()
        const d2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 5, now.getMinutes(), now.getSeconds(), now.getMilliseconds())
        //console.log(temperature,humidity);
        const createdTemp = await RemovingIndicators.create({ id_paramsSensor:1, id_placementSensor:3,id_unit:1,measurement:temperature,date:d2})
        const createdHum = await RemovingIndicators.create({ id_paramsSensor:2, id_placementSensor:3,id_unit:3,measurement:humidity,date:d2})
        return [createdTemp,createdHum]
    }
        
        async getAll() {
            const removingIndicators = await RemovingIndicators.findAll()
            return removingIndicators
        }
        

}

module.exports = new  RemovingIndicatorsService()