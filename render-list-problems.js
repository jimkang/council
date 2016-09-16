var d3 = require('d3-selection');
var accessor = require('accessor');
var addNewProblem = require('./add-new-problem');

var getId = accessor();

function renderListProblems({problemsData, setRoute, saveProblem}) {
  var listSection = d3.select('#list-problems');
  listSection.classed('hidden', false);

  listSection.select('.add-button').on('click', add);

  var problemsRoot = listSection.select('.problems-root');
  var problems = problemsRoot.selectAll('.problem').data(problemsData, getId);

  problems.exit().remove();

  var newProblems = problems.enter().append('li').classed('problem', true);
  newProblems.append('div').classed('problem-text', true).on('click', display);
  newProblems.append('button').classed('edit-button', true).text('Edit').on('click', edit);

  var updateProblems = newProblems.merge(problems);
  updateProblems.attr('id', getId);
  updateProblems.selectAll('.problem-text').text(accessor('text'));

  function display(problem) {
    listSection.classed('hidden', true);
    setRoute('/problem/' + problem.id);
  }

  function edit(problem) {
    listSection.classed('hidden', true);
    setRoute('/problem/' + problem.id + '/edit');
  }

  function add() {
    addNewProblem({
      saveProblem: saveProblem,
      setRoute: setRoute
    });
  }
}

module.exports = renderListProblems;
