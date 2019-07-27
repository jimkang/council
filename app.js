var RouteState = require('route-state');
var renderEditProblem = require('./render-edit-problem');
var renderDisplayProblem = require('./render-display-problem');
//var renderListProblems = require('./render-list-problems');
//var Store = require('./store');
//var sb = require('standard-bail')();
//var handleError = require('./handle-error');
//var changeCouncil = require('./change-council');
var welcomeProblem = require('./data/welcome-problem.json');

// require('longjohn');

var routeState;
//var store;

(function init() {
  routeState = RouteState({ followRoute, windowObject: window });
  //store = Store({ routeState });
  routeState.routeFromHash();
})();

function followRoute(routeDict) {
  var { action, problem, choices } = routeDict;

  if (choices) {
    choices = JSON.parse(choices);
  }

  if (action === 'edit') {
    renderEditProblem({
      problem: makeProblem({
        problem: problem || welcomeProblem.text,
        choices: choices || []
      }),
      onEditProblemUpdate,
      onDisplay
    });
    return;
  }

  if (
    !action ||
    !problem ||
    !choices ||
    !Array.isArray(choices) ||
    choices.length < 1
  ) {
    routeState.addToRoute({
      action: 'display',
      problem: welcomeProblem.text,
      choices: JSON.stringify(welcomeProblem.choices)
    });
    return;
  }

  if (action === 'display') {
    renderDisplayProblem({
      problem: makeProblem({ problem, choices }),
      onDisplayProblemUpdate,
      onEdit
    });
  }
}

function makeProblem({ problem, choices }) {
  return {
    text: problem,
    choices
  };
}

function updateRouteWithProblem({
  action,
  problem,
  followNewRouteAfterUpdating = true
}) {
  routeState.addToRoute(
    {
      action,
      problem: problem.text,
      choices: JSON.stringify(problem.choices)
    },
    followNewRouteAfterUpdating
  );
}

function onDisplayProblemUpdate(problem) {
  updateRouteWithProblem({ action: 'display', problem });
}

function onEdit() {
  routeState.addToRoute({ action: 'edit' });
}

function onDisplay() {
  routeState.addToRoute({ action: 'display' });
}

function onEditProblemUpdate(problem) {
  updateRouteWithProblem({
    action: 'edit',
    problem,
    followNewRouteAfterUpdating: false
  });
}
