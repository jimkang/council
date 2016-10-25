var getCouncil = require('./get-council');
var sb = require('standard-bail')();

function changeCouncil(problem, done) {
  getCouncil({numberOfMembers: problem.choices.length}, sb(updateMembers, done));

  function updateMembers(members) {
    // console.log(members);
    for (var i = 0; i < members.length && i < problem.choices.length; ++i) {
      problem.choices[i].presenterImageURL = members[i];
    }
    done(null, problem);
  }
}

module.exports = changeCouncil;
