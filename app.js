var director = require('director');
var renderEditProblem = require('./render-edit-problem');
var renderDisplayProblem = require('./render-display-problem');
var renderListProblems = require('./render-list-problems');
var Store = require('./store');
var sb = require('standard-bail')();
var handleError = require('./handle-error');
var addNewProblem = require('./add-new-problem');

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
        addNewProblem({
          saveProblem: store.saveProblem,
          setRoute: safeSetRoute
        });
      }
      else {
        renderListProblems({
          problemsData: problems,
          saveProblem: store.saveProblem,
          setRoute: safeSetRoute
        });
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
