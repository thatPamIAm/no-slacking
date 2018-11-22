'use strict';

function index (req, res) {
  res.render('home/index', {
    title: 'Home'
  });
}

function info (req, res) {
  res.render('home/info', {
    title: 'Additional Info page'
  });
}

function athleteInfo (req, res) {
  res.render('home/athlete', {
    info: 'Athlete Info',
    athleteName: 'NAME',
    athleteCity: 'CITY'
  })
}

module.exports = {
  index: index,
  info: info,
  athleteInfo: athleteInfo
}