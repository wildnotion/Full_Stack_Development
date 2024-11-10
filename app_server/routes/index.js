var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main'); //Added in Module Two

/* GET home page. */
router.get('/', ctrlMain.index); //Added in Module Two

/* Removed during Module Two
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

module.exports = router;
