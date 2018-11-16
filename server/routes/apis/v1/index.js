'use strict';

const express = require('express');
const athletesController = require('../../../controllers/apis/athletes');

let router = express.Router();
// Athletes route
router.use('/athletes', athletesController);

module.exports = router;