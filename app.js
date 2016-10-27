var director = require('director');
var renderEditProblem = require('./render-edit-problem');
var renderDisplayProblem = require('./render-display-problem');
var renderListProblems = require('./render-list-problems');
var Store = require('./store');
var sb = require('standard-bail')();
var handleError = require('./handle-error');
var walkMachine = require('walk-machine');
var callNextTick = require('call-next-tick');
var changeCouncil = require('./change-council');
var welcomeProblem = require('./data/welcome-problem.json');

// require('longjohn');

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
        store.saveProblem(welcomeProblem, sb(goToWelcome, handleError));
      }
      else {
        renderListProblems({
          problemsData: problems,
          saveProblem: store.saveProblem,
          setRoute: safeSetRoute
        });
      }
    }

    function goToWelcome() {
      safeSetRoute('/problem/problem-hello');
    }
  }

  function displayProblem(id) {
    var stateMap = {
      start: {
        work: store.loadProblem,
        params: [id],
        next: pickStateAfterLoad
      },
      loadImages: {
        work: changeCouncil,
        next: 'render'
      },
      render: {
        work: callRender
      }
    };

    walkMachine(stateMap, handleError);

    function pickStateAfterLoad(problem, done) {
      var nextState = 'loadImages';
      if (problem.choices.every((choice) => choice.presenterImageURL)) {
        nextState = 'render';
      }
      done(null, nextState);
    }

    function callRender(problem, done) {
      renderDisplayProblem({
        problem: problem,
        commitChanges: store.saveProblem,
        setRoute: safeSetRoute
      });
      callNextTick(done);
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
