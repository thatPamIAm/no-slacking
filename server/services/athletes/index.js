'use strict';

const athletes = [{
  id: 1,
  name: 'Mike Dao',
  sports: [
      'cycling',
      'steps'
  ]
}, {
  id: 2,
  name: 'Pam Lovett',
  sports: [
      'running',
      'steps'
  ]
}];

function getAthletes(req, res) {
  res.json(athletes);
}

module.exports = {
  getAthletes: getAthletes
};