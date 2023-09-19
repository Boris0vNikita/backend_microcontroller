const Sequelize = require("sequelize");
const Sensor = require("./Sensor.js");
const Unit = require("./Unit.js")
const Parametr = require("./Parameter.js")
const Room = require("./Room.js")
const ParamsSensor = require("./ParamsSensor.js")
const PlacementSensor = require("./PlacementSensor.js")
const RemovingIndicators = require("./RemovingIndicators.js")

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: process.env.POSTGRES_DIALECT,
  }
);

const db = {};

db.Sensor = Sensor(sequelize, Sequelize);

db.Unit = Unit(sequelize, Sequelize);
db.Parametr = Parametr(sequelize, Sequelize);
db.Room = Room(sequelize, Sequelize);
db.ParamsSensor = ParamsSensor(sequelize, Sequelize);
db.PlacementSensor = PlacementSensor(sequelize, Sequelize);
db.RemovingIndicators = RemovingIndicators(sequelize, Sequelize);

// db.Location.hasMany(db.Sensor, { as: "Location", foreignKey: "idLocation" });
// db.Sensor.hasMany(db.RecordData, { as: "sensor", foreignKey: "idSensor" });

//Parametr -< ParamsSensor
db.Parametr.hasMany(db.ParamsSensor, { foreignKey: "id_parametr" });
db.ParamsSensor.belongsTo(db.Parametr, { foreignKey: "id_parametr" });

//sensor -< ParamsSensor
db.Sensor.hasMany(db.ParamsSensor, { foreignKey: "id_sensor" });
db.ParamsSensor.belongsTo(db.Sensor, { foreignKey: "id_sensor" });

//sensor -< PlacementSensor
db.Sensor.hasMany(db.PlacementSensor, { foreignKey: "id_sensor" });
db.PlacementSensor.belongsTo(db.Sensor, { foreignKey: "id_sensor" });

//room -< PlacementSensor
db.Room.hasMany(db.PlacementSensor, { foreignKey: "id_room" });
db.PlacementSensor.belongsTo(db.Room, { foreignKey: "id_room" });

//unit -< RemovingIndicators
db.Unit.hasMany(db.RemovingIndicators, { foreignKey: "id_unit" });
db.RemovingIndicators.belongsTo(db.Unit, { foreignKey: "id_unit" });

//PlacementSensor -< RemovingIndicators
db.PlacementSensor.hasMany(db.RemovingIndicators, { foreignKey: "id_placementSensor" });
db.RemovingIndicators.belongsTo(db.PlacementSensor, { foreignKey: "id_placementSensor" });

//ParamsSensor -< RemovingIndicators
db.ParamsSensor.hasMany(db.RemovingIndicators, { foreignKey: "id_paramsSensor" });
db.RemovingIndicators.belongsTo(db.ParamsSensor, { foreignKey: "id_paramsSensor" });

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize.sync();

module.exports = db;
