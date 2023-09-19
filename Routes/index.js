const sensorRouter = require("./SensorRoute");
const unitRouter = require("./UnitRouter");
const paramentrRouter = require("./ParametrRoute");
const roomRouter = require("./RoomRouter");
const paramesSensorRouter = require("./ParamsSensorRouter");
const placementSensorRouter = require("./PlacementSensorRouter");
const removingIndicatorsRouter = require("./RemovingIndicatorsRouter");
const viewRouter = require("./ViewRoute");

const routers = [ 
    sensorRouter, 
    unitRouter,
    paramentrRouter,
    roomRouter,
    paramesSensorRouter,
    placementSensorRouter,
    removingIndicatorsRouter,
    viewRouter
];

module.exports = routers;
