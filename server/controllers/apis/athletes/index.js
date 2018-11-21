'use strict';

const express = require('express');
const athleteRecord = require('../../../services/athletes');

let router = express.Router();

router.get('/', athleteRecord.getAthletes);

module.exports = router;