var director = require('director');
var randomId = require('idmaker').randomId;
var renderEditProblem = require('./render-edit-problem');
var renderDisplayProblem = require('./render-display-problem');
var Store = require('./store');
var sb = require('standard-bail')();
var handleError = require('./handle-error');

var store;

((((function init() {
  store = Store();

  var router = director.Router({
    '/problem/:id': displayProblem,
    '/problem/:id/edit': editProblem,
    '/': decide
  });

  router.notfound = decide;
  var safeSetRoute = router.setRoute.bind(router);

  router.init('/');

  function decide() {
    store.loadAllProblems(sb(decideWithProblems, handleError));

    function decideWithProblems(problems) {
      if (!problems || problems.length < 1) {
        renderEditProblem({
          problem: createNewProblem(),
          commitChanges: store.saveProblem,
          setRoute: safeSetRoute
        });
      }
      else {
        console.log(problems);
        // renderListProblems();
      }
    }
  }

  function displayProblem(id) {
    store.loadProblem(id, sb(callRender, handleError));

    function callRender(problem) {
      renderDisplayProblem({
        problem: problem,
        setRoute: safeSetRoute
      });
    }
  }

  function editProblem(id) {
    store.loadProblem(id, sb(callEdit, handleError));

    function callEdit(problem) {
      renderEditProblem({
        problem: problem,
        commitChanges: store.saveProblem,
        setRoute: safeSetRoute
      });
    }
  }

})())));

function createNewProblem() {
  return {
    id: 'problem-' + randomId(4),
    problemText: '<Your problem goes here.>',
    presenterImageURL: '',
    choices: []
  };
}

