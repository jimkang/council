var d3 = require('d3-selection');
var accessor = require('accessor');
var addNewProblem = require('./add-new-problem');
var tornPaperBoxKit = require('./torn-paper-box-kit');

var getId = accessor();

function renderListProblems({ problemsData, setRoute, saveProblem }) {
  d3.selectAll('body > section:not(#list-problems)').classed('hidden', true);

  var listSection = d3.select('#list-problems');
  listSection.classed('hidden', false);

  listSection.select('#add-button').on('click', add);

  var problemsRoot = listSection.select('.problems-root');
  var problems = problemsRoot.selectAll('.problem').data(problemsData, getId);

  problems.exit().remove();

  var newProblems = problems
    .enter()
    .append('li')
    .classed('problem', true);

  tornPaperBoxKit.setUpTornPaperBoxes(newProblems);

  newProblems.selectAll('svg').on('click', display);
  newProblems
    .append('a')
    .classed('action-link', true)
    .text('Edit')
    .on('click', edit);

  var updateProblems = newProblems.merge(problems);
  updateProblems.attr('id', getId);
  updateProblems.selectAll('.problem .dialogue-text').text(accessor('text'));

  tornPaperBoxKit.renderTearsAfterDelay(listSection);

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
