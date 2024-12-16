// Added in Module Five
const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

router
  .route("/trips")
  .get(tripsController.tripsList)
  //.post(authenticateJWT, tripsController.tripsAddTrip);
  .post(tripsController.tripsAddTrip);

router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindByCode)
  //.put(authenticateJWT, tripsController.tripsUpdateTrip);
  .put(tripsController.tripsUpdateTrip);

module.exports = router;