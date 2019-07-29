var RouteState = require('route-state');
var renderEditProblem = require('./render-edit-problem');
var renderDisplayProblem = require('./render-display-problem');
var renderListProblems = require('./render-list-problems');
var store = require('./store');
//var sb = require('standard-bail')();
//var handleError = require('./handle-error');
//var changeCouncil = require('./change-council');
var welcomeProblem = require('./data/welcome-problem.json');
var createNewProblem = require('./create-new-problem');

// require('longjohn');

var routeState;

(function init() {
  routeState = RouteState({ followRoute, windowObject: window });
  routeState.routeFromHash();
})();

function followRoute(routeDict) {
  var { action, id, text, choices, councilSource } = routeDict;

  if (choices) {
    choices = JSON.parse(choices);
  }
  if (councilSource) {
    councilSource = JSON.parse(councilSource);
  }

  var defaultHandlers = {
    onDisplayProblemUpdate,
    onEditProblemUpdate,
    onDisplay,
    onDisplaySpecificProblem,
    onEdit,
    onList,
    onNew,
    onRememberProblem
  };

  if (action === 'edit') {
    renderEditProblem(
      Object.assign(
        {
          problem: makeProblemObject({
            id: id || welcomeProblem.id,
            text: text || welcomeProblem.text,
            choices: choices || [],
            councilSource: councilSource || {}
          })
        },
        defaultHandlers
      )
    );
    return;
  }

  if (action === 'list') {
    renderListProblems(
      Object.assign(
        {
          problemsData: store.getRememberedProblems()
        },
        defaultHandlers
      )
    );
    return;
  }

  if (
    !action ||
    !id ||
    !text ||
    !choices ||
    !Array.isArray(choices) ||
    choices.length < 1
  ) {
    routeState.addToRoute({
      action: 'display',
      id: welcomeProblem.id,
      text: welcomeProblem.text,
      choices: JSON.stringify(welcomeProblem.choices),
      councilSource: JSON.stringify(welcomeProblem.councilSource)
    });
    return;
  }

  if (action === 'display') {
    renderDisplayProblem(
      Object.assign(
        {
          problem: makeProblemObject({ id, text, choices, councilSource })
        },
        defaultHandlers
      )
    );
  }
}

function makeProblemObject({ id, text, choices, councilSource }) {
  return {
    id,
    text,
    choices,
    councilSource
  };
}

function updateRouteWithProblem({
  action,
  problem, // Actual problem object.
  followNewRouteAfterUpdating = true
}) {
  routeState.addToRoute(
    {
      action,
      id: problem.id,
      text: problem.text,
      choices: JSON.stringify(problem.choices),
      councilSource: JSON.stringify(problem.councilSource)
    },
    followNewRouteAfterUpdating
  );
}

function onDisplayProblemUpdate(problem) {
  updateRouteWithProblem({ action: 'display', problem });
}

function onRememberProblem(problem) {
  store.rememberProblem(problem);
  // TODO: Show confirmation that it was remembered.
  // renderRememberConfirmation();
}

function onEdit() {
  routeState.addToRoute({ action: 'edit' });
}

function onDisplay() {
  routeState.addToRoute({ action: 'display' });
}

function onList() {
  routeState.addToRoute({ action: 'list' });
}

function onNew() {
  var newProblem = createNewProblem();
  routeState.addToRoute({
    action: 'edit',
    id: newProblem.id,
    text: newProblem.text,
    choices: JSON.stringify(newProblem.choices)
    //councilSource: JSON.stringify(newProblem.choices)
  });
}

function onEditProblemUpdate(problem, followNewRouteAfterUpdating = false) {
  updateRouteWithProblem({
    action: 'edit',
    problem,
    followNewRouteAfterUpdating
  });
}

function onDisplaySpecificProblem(problem) {
  updateRouteWithProblem({
    action: 'display',
    problem,
    followNewRouteAfterUpdating: true
  });
}
