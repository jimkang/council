var director = require('director');
var randomId = require('idmaker').randomId;
var renderEditProblem = require('./render-edit-problem');
var renderDisplayProblem = require('./render-display-problem');

((((function init() {
  var router = director.Router({
    '/problem/:id': displayProblem,
    '/problem/:id/edit': editProblem,
    '/': decide
  });

  router.notfound = decide;
  var safeSetRoute = router.setRoute.bind(router);

  router.init('/');

  function decide() {
    var problems = getProblems();
    if (!problems) {
      renderEditProblem({
        problem: createNewProblem(),
        commitChanges: commitChanges,
        setRoute: safeSetRoute
      });
    }
    else {
      // renderListProblems();
    }
  }

  function displayProblem(id) {
    var problem = getProblem(id);
    renderDisplayProblem({
      problem: problem,
      setRoute: safeSetRoute
    });
  }

  function editProblem(id) {
    var problem = getProblem(id);
    renderEditProblem({
      problem: problem,
      commitChanges: commitChanges,
      setRoute: safeSetRoute
    });
  }
})())));

function getProblems() {

}

function getProblem(id) {
  if (!id) {
    console.log('getProblem not given an id.');
    return;
  }

  var problemString = window.localStorage.getItem(id);
  if (problemString) {
    return JSON.parse(problemString);
  }
}

function createNewProblem() {
  return {
    id: 'problem-' + randomId(4),
    problemText: '<Your problem goes here.>',
    presenterImageURL: '',
    choices: []
  };
}

function commitChanges(problem) {
  if (!problem || !problem.id) {
    console.log('Could not commit malformed problem.');
    return;
  }

  var problemList = [];
  var problemListString = window.localStorage.getItem('index-problems');
  if (problemListString) {
    problemList = JSON.parse(problemListString);
  }

  if (problemList.indexOf(problem.id) === -1) {
    problemList.push(problem.id);
    window.localStorage.setItem('index-problems', JSON.stringify(problemList));
  }

  window.localStorage.setItem(problem.id, JSON.stringify(problem));
}
