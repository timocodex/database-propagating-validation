var express = require('express');
var router = express.Router();
var Events = require('../controllers/events.controller')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',Events.create)

module.exports = router;
