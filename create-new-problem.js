var randomId = require('idmaker').randomId;
var changeCouncil = require('./change-council');

function createNewProblem(done) {
  var problem = {
    id: 'problem-' + randomId(4),
    text: 'Here is a problem. <Click to edit this problem.>',
    presenterImageURL: '',
    choices: [
      {
        id: 'default-choice-a',
        text: 'You can do this. <Click to edit this choice.>'
      },
      {
        id: 'default-choice-b',
        text: 'Or you can do that. <Click to edit this choice.>'
      }
    ]
  };
  changeCouncil(problem, done);
}

module.exports = createNewProblem;
