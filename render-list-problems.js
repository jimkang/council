var d3 = require('d3-selection');
var accessor = require('accessor');
var tornPaperBoxKit = require('./torn-paper-box-kit');

var getId = accessor();

function renderListProblems({ problemsData, onNew, onDisplaySpecificProblem }) {
  d3.selectAll('body > section:not(#list-problems)').classed('hidden', true);

  var listSection = d3.select('#list-problems');
  listSection.classed('hidden', false);

  listSection.select('.new-button').on('click', onNew);

  var problemsRoot = listSection.select('.problems-root');
  var problems = problemsRoot.selectAll('.problem').data(problemsData, getId);

  problems.exit().remove();

  var newProblems = problems
    .enter()
    .append('li')
    .classed('problem', true);

  tornPaperBoxKit.setUpTornPaperBoxes(newProblems);

  newProblems.selectAll('svg').on('click', onDisplaySpecificProblem);
  /*
  newProblems
    .append('a')
    .classed('action-link', true)
    .text('Edit')
    .on('click', edit);
  */

  var updateProblems = newProblems.merge(problems);
  updateProblems.attr('id', getId);
  updateProblems.selectAll('.problem .dialogue-text').text(accessor('text'));

  tornPaperBoxKit.renderTearsAfterDelay(listSection);
}

module.exports = renderListProblems;
