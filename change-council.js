var getCouncil = require('./get-council');
var sb = require('standard-bail')();

function changeCouncil(problem, done) {
  getCouncil({numberOfMembers: problem.choices.length}, sb(updateChoices, done));

  function updateChoices(councilResults) {
    for (var i = 0; i < councilResults.length && i < problem.choices.length; ++i) {
      let choice = problem.choices[i];
      let result = councilResults[i];
      choice.presenterImageURL = result.url;
      choice.imageTitle = result.title;
      choice.imageSource = result.source;
    }
    done(null, problem);
  }
}

module.exports = changeCouncil;
