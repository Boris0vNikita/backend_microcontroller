const Router = require("express");
const ViewController = require("../Controllers/ViewController");
const router = new Router();


router.get("/view", ViewController.getViewBy);
//router.get("/view/:name_room", ViewController.getViewByNamePlace);
router.get("/view/:id", ViewController.getById);

module.exports = router;
