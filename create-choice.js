var randomId = require('idmaker').randomId;

function createChoice() {
  return {
    id: 'choice-' + randomId(4),
    text: '<Click here to edit this choice>',
    presenterImageURL: 'http://smidgeo.com/images/smidgeo_on_the_move.png'
  };
}

module.exports = createChoice;
