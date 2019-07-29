function makeProblemObject({ id, text, choices, councilSource }) {
  return {
    id,
    text,
    choices,
    councilSource
  };
}

function serializeProblemForRoute(problem) {
  return {
    id: problem.id,
    text: problem.text,
    choices: JSON.stringify(problem.choices),
    councilSource: JSON.stringify(problem.councilSource)
  };
}

module.exports = { makeProblemObject, serializeProblemForRoute };
