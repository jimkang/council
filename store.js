var levelup = require('levelup');
var leveljs = require('level-js');
var Sublevel = require('level-sublevel');

function Store() {
  var db = Sublevel(
    levelup('council', {
      db: leveljs,
      valueEncoding: 'json'
    })
  );
  var problemDb = db.sublevel('problem');

  return {
    saveProblem: saveProblem,
    loadProblem: loadProblem,
    loadAllProblems: loadAllProblems
  };

  function saveProblem(problem, done) {
    problemDb.put(problem.id, problem, done);
  }

  function loadProblem(id, done) {
    problemDb.get(id, done);
  }

  function loadAllProblems(done) {
    var problems = [];
    var stream = problemDb.createValueStream();

    stream
      .on('error', handleError)
      .on('data', saveValue)
      .on('end', passValues);

    function handleError(error) {
      stream.destroy();
      done(error);
    }

    function saveValue(problem) {
      problems.push(problem);
    }

    function passValues() {
      done(null, problems);
    }
  }
}

module.exports = Store;
