const Router = require("express");
const RemovingIndicatorsController = require("../Controllers/RemovingIndicatorsController");

const router = new Router();

router.post("/removing", RemovingIndicatorsController.createDataSensor);
router.get("/removing", RemovingIndicatorsController.getAll);

module.exports = router;
