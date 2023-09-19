const Router = require("express");
const PlacementSensorController = require("../Controllers/PlacementSensorController");

const router = new Router();

router.post("/placementSensor", PlacementSensorController.createPlacementSensor);
router.get("/placementSensor", PlacementSensorController.getAll);

module.exports = router;
