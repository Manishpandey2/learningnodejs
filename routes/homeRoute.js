const { homePage } = require("../controller/homeController");

const router = require("express").Router();

router.route("/").get(homePage);

module.exports = router;
