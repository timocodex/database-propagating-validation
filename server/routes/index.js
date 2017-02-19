var express = require('express');
var router = express.Router();
var Events = require('../controllers/events.controller')
/* GET home page. */
router.get('/',Events.show);
router.post('/',Events.create)
router.delete('/',Events.delAll)
module.exports = router;
