var d3 = require('d3-selection');
var createChoice = require('./create-choice');
var callNextTick = require('call-next-tick');
var accessor = require('accessor');
//var handleError = require('./handle-error');

var getId = accessor();

function renderEditProblem({ problem, onEditProblemUpdate, onDisplay, onNew }) {
  // Go to the top of the page.
  document.body.scrollTop = 0;

  d3.selectAll('body > section:not(#edit-problem)').classed('hidden', true);

  var originalOpts = arguments[0];
  var editSection = d3.select('#edit-problem');
  editSection.classed('hidden', false);

  editSection.select('.add-choice-button').on('click', addChoice);
  editSection.select('.view-button').on('click', view);
  editSection.select('.new-button').on('click', onNew);

  editSection
    .select('.problem .dialogue-text')
    .datum(problem)
    .text(problem.text)
    .on('blur', onEndProblemTextEdit);

  var choiceRoot = editSection.select('.choice-root');
  var choices = choiceRoot.selectAll('.choice').data(problem.choices, getId);

  choices.exit().remove();

  var newChoices = choices
    .enter()
    .append('li')
    .classed('choice', true);

  newChoices
    .append('div')
    .classed('dialogue-text', true)
    .attr('contenteditable', true);

  var updateChoices = newChoices.merge(choices);
  updateChoices.attr('id', getId);
  updateChoices
    .select('.dialogue-text')
    .text(accessor('text'))
    .on('blur', onEndChoiceEdit);

  function addChoice() {
    problem.choices.push(createChoice());
    callNextTick(renderEditProblem, originalOpts);
  }

  function onEndProblemTextEdit(p) {
    p.text = this.textContent;
    onEditProblemUpdate(problem);
  }

  function onEndChoiceEdit(choice) {
    choice.text = this.textContent;
    onEditProblemUpdate(problem);
  }

  function view() {
    editSection.classed('hidden', true);
    onDisplay();
  }
}

module.exports = renderEditProblem;
