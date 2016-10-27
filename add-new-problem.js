var renderEditProblem = require('./render-edit-problem');
var randomId = require('idmaker').randomId;

function addNewProblem({saveProblem, problemDef, setRoute}) {
  renderEditProblem({
    problem: problemDef ? problemDef : createNewProblem(),
    commitChanges: saveProblem,
    setRoute: setRoute
  });

  function createNewProblem() {
    return {
      id: 'problem-' + randomId(4),
      text: 'Here is a problem. <Click to edit this problem.>',
      presenterImageURL: '',
      choices: [
        {
          'id': 'default-choice-a',
          'text': 'You can do this. <Click to edit this choice.>'
        },
        {
          'id': 'default-choice-b',
          'text': 'Or you can do that. <Click to edit this choice.>'
        }
      ]
    };
  }
}

module.exports = addNewProblem;
