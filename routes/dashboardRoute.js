const { getDashboard } = require("../controller/dashboardController");
const { isAuthenticated } = require("../middleware/isAuthenticated");

const router = require("express").Router();

router.route("/dashboard").get(isAuthenticated, getDashboard);

module.exports = router;
