var renderEditProblem = require('./render-edit-problem');
var randomId = require('idmaker').randomId;

function addNewProblem({saveProblem, setRoute}) {
  renderEditProblem({
    problem: createNewProblem(),
    commitChanges: saveProblem,
    setRoute: setRoute
  });
}

function createNewProblem() {
  return {
    id: 'problem-' + randomId(4),
    text: '<Your problem goes here.>',
    presenterImageURL: '',
    choices: []
  };
}

module.exports = addNewProblem;
