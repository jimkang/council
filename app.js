var director = require('director');
var randomId = require('idmaker').randomId;
var renderEditProblem = require('./render-edit-problem');

((((function init() {
  var router = director.Router({
    '/problem/:id': displayProblem,
    '/problem/:id/edit': editProblem,
    '/': decide
  });

  router.notfound = decide;
  router.init('/');

  function decide() {
    var problems = getProblems();
    if (!problems) {
      renderEditProblem({
        problem: createNewProblem(),
        commitChanges: commitChanges,
        setRoute: router.setRoute.bind(router)
      });
    }
    else {
      // renderListProblems();
    }
  }

})())));

function displayProblem(id) {
  console.log('display', id);
}

function editProblem(id) {

}

function getProblems() {

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
