const Router = require("express");
const ParamsSensorController = require("../Controllers/ParamsSensorController");

const router = new Router();

router.post("/paramSensor", ParamsSensorController.createParamsSensor);
router.get("/paramSensor", ParamsSensorController.getAll);

module.exports = router;
