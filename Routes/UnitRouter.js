const Router = require("express");
const UnitController = require("../Controllers/UnitController");

const router = new Router();

router.post("/unit", UnitController.createUnit);
router.get("/unit", UnitController.getAll);

module.exports = router;
