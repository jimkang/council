// Singleton.

// Load from localStorage when the module is loaded.
// These are actually wrapper objects. The problem is
// in the `problem` property, and the date it was
// remembered is in the `dateRemembered` property.
var problemDict = {};

if (localStorage.problems) {
  try {
    problemDict = JSON.parse(localStorage.problems);
  } catch (e) {
    console.log(e, e.stack);
  }
}

function saveDict() {
  localStorage.problems = JSON.stringify(problemDict);
}

function rememberProblem(problem) {
  problemDict[problem.id] = { problem, dateRemembered: new Date() };
  saveDict();
}

function getProblem(id) {
  return problemDict[id].problem;
}

function forgetAllProblems() {
  problemDict = {};
  saveDict();
}

function getRememberedProblems() {
  return Object.values(problemDict)
    .sort(compareDate)
    .map(w => w.problem);
}

function compareDate(a, b) {
  if (a < b) {
    return -1;
  }
  return 1;
}

module.exports = {
  rememberProblem,
  getProblem,
  forgetAllProblems,
  getRememberedProblems
};
