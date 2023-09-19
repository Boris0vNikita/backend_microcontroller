const Router = require("express");
const RoomController = require("../Controllers/RoomController");

const router = new Router();

router.post("/room", RoomController.createRoom);
router.get("/room", RoomController.getAll);

module.exports = router;
