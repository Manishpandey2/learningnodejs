const { getDashboard } = require("../controller/dashboardController");

const router = require("express").Router();

router.route("/dashboard").get(getDashboard);

module.exports = router;
