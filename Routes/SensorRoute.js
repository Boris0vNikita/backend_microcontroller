const Router = require("express");
const SensorController = require("../Controllers/SensorController.js");

const router = new Router();

router.post("/sensor", SensorController.createSensor);
router.get("/sensor", SensorController.getAll);
router.get("/sensor/:id", SensorController.getById);

module.exports = router;
