var d3 = require('d3-selection');
var accessor = require('accessor');
var changeCouncil = require('./change-council');
var handleError = require('./handle-error');
var sb = require('standard-bail')();
var tornPaperBoxKit = require('./torn-paper-box-kit');

var getId = accessor();

function renderDisplayProblem({ problem, onDisplayProblemUpdate, onEdit }) {
  d3.selectAll('body > section:not(#display-problem)').classed('hidden', true);
  // Go to the top of the page.
  document.body.scrollTop = 0;

  d3.select('#change-council-link').on('click', updateCouncil);

  var displaySection = d3.select('#display-problem');
  displaySection.classed('hidden', false);

  displaySection.select('.edit-button').on('click', edit);

  var choiceRoot = displaySection.select('.choice-root');
  var choices = choiceRoot.selectAll('.choice').data(problem.choices, getId);
  // Also (re-)bind data to img elements so accessors using them work with current data.
  choices.selectAll('.presenter img').data(problem.choices, getId);

  choices.exit().remove();

  var newChoices = choices
    .enter()
    .append('li')
    .classed('choice', true);
  newChoices
    .append('div')
    .classed('presenter', true)
    .append('a')
    .classed('attribution-link', true)
    .append('img');

  tornPaperBoxKit.setUpTornPaperBoxes(newChoices);

  var updateChoices = newChoices.merge(choices);
  updateChoices.attr('id', getId);
  updateChoices
    .selectAll('.presenter img')
    .attr('src', accessor('presenterImageURL'))
    .attr('alt', accessor('imageTitle'));
  updateChoices
    .selectAll('.attribution-link')
    .attr('href', accessor('imageSource'));

  updateChoices.selectAll('.dialogue-text').text(accessor('text'));

  displaySection.select('.problem .dialogue-text').text(problem.text);

  tornPaperBoxKit.renderTearsAfterDelay(displaySection);

  function edit() {
    displaySection.classed('hidden', true);
    onEdit();
  }

  function updateCouncil() {
    changeCouncil(problem, sb(onDisplayProblemUpdate, handleError));
  }
}

module.exports = renderDisplayProblem;
