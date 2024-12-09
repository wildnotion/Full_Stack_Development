// Added in Module Five
const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

router.route("/trips").get(tripsController.tripsList);

router.route("/trips/:tripCode").get(tripsController.tripsFindByCode); // Added in Module Five

module.exports = router;