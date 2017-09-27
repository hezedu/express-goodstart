var express = require('express');
var router = express.Router();
var api = require('./api');

/* GET users listing. */
router.use(api);

module.exports = router;
