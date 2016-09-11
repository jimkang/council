var director = require('director');
var randomId = require('idmaker').randomId;
var renderEditProblem = require('./render-edit-problem');

((((function init() {
  var router = director.Router({
    '/problem/:problemId': displayProblem,
    '/problem/:problemId/edit': editProblem,
    '/': decide
  });

  router.notfound = decide;
  router.init('/');
})())));


function decide() {
  var problems = getProblems();
  if (!problems) {
    renderEditProblem({
      problem: createNewProblem(),
      commitChanges: commitChanges
    });
  }
  else {
    // renderListProblems();
  }
}

function displayProblem(problemId) {

}

function editProblem(problemId) {

}

function getProblems() {

}

function createNewProblem() {
  return {
    problemId: 'problem-' + randomId(4),
    problemText: '<Your problem goes here.>',
    presenterImageURL: '',
    choices: []
  };
}

function commitChanges(problem) {
  if (!problem || !problem.problemId) {
    console.log('Could not commit malformed problem.');
    return;
  }

  var problemList = [];
  var problemListString = window.localStorage.getItem('index-problems');
  if (problemListString) {
    problemList = JSON.parse(problemListString);
  }

  if (problemList.indexOf(problem.problemId) === -1) {
    problemList.push(problem.problemId);
    window.localStorage.setItem('index-problems', JSON.stringify(problemList));
  }

  window.localStorage.setItem(problem.problemId, JSON.stringify(problem));
}
