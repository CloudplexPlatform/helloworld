var express = require('express');
var router = express.Router();
const { showIndex } = require('../request/handlers/index');


router.get('/', showIndex);

module.exports = router;