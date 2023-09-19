const Router = require("express");
const ParametrController = require("../Controllers/ParametrController");

const router = new Router();

router.post("/param", ParametrController.createParametr);
router.get("/param", ParametrController.getAll);

module.exports = router;
