var express = require('express');
var router = express.Router();
const controller = require("../controllers/main");

/* GET index/main page. */
router.get("/", controller.index);

module.exports = router;
