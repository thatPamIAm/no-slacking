'use strict';
var strava = require('strava-v3');
require('dotenv').config()

function getAthletes (req, res) {
  strava.athlete.get({'access_token':process.env.STRAVA_ACCESS_TOKEN}, function(err, payload, limits){
    res.json({name: payload.firstname, city: payload.city})
  })
}

module.exports = {
  getAthletes: getAthletes
}