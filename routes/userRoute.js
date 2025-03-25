const { delteUser } = require("../controller/userControler");

const router = require("express").Router();

router.route("/deleteUser/:id").get(delteUser);

module.exports = router;
