var director = require('director');
var renderEditProblem = require('./render-edit-problem');
var renderDisplayProblem = require('./render-display-problem');
var renderListProblems = require('./render-list-problems');
var Store = require('./store');
var sb = require('standard-bail')();
var handleError = require('./handle-error');
var addNewProblem = require('./add-new-problem');
var walkMachine = require('walk-machine');
var callNextTick = require('call-next-tick');
var queue = require('d3-queue').queue;

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
    var stateMap = {
      start: {
        work: store.loadProblem,
        params: [id],
        next: pickStateAfterLoad
      },
      loadImages: {
        work: findImages,
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

    function findImages(problem, done) {
      var q = queue();
      problem.choices.forEach(queueGetImage);
      q.awaitAll(sb(passProblem, done));

      function passProblem() {
        done(null, problem);
      }
      
      function queueGetImage(choice) {
        // TODO: Actual impl.
        q.defer(setImage, choice);

        function setImage(choice, done) {
          choice.presenterImageURL = 'http://smidgeo.com/images/smidgeo_on_the_move.png';
          done(null, choice);
        }
        // callNextTick(done, null, choice);
      }
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
