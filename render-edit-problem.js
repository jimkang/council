var d3 = require('d3-selection');
var createChoice = require('./create-choice');
var accessor = require('accessor');
var sb = require('standard-bail')();
var handleError = require('handle-error-web');
var WaitingMessage = require('./waiting-message');

var getId = accessor();
var waitingMessage = WaitingMessage({
  messageElementSelector: '#edit-problem .waiting-message'
});

function renderEditProblem({ problem, onEditProblemUpdate, onDisplay, onNew }) {
  // Go to the top of the page.
  document.body.scrollTop = 0;

  d3.selectAll('body > section:not(#edit-problem)').classed('hidden', true);

  var editSection = d3.select('#edit-problem');
  editSection.classed('hidden', false);

  editSection.select('.add-choice-button').on('click', addChoice);
  editSection.select('.view-button').on('click', view);
  editSection.select('.new-button').on('click', onNewButtonClicked);

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
    .classed('choice', true)
    .classed('centered-col', true);

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

  function onNewButtonClicked() {
    onNew({ waitingMessage });
  }

  function addChoice() {
    waitingMessage.show({ message: 'Summoning councilor for new choice…' });
    createChoice(problem.councilSource, sb(updateWithNewChoice, handleError));
  }

  function updateWithNewChoice(choice) {
    waitingMessage.hide();
    problem.choices.push(choice);
    onEditProblemUpdate(problem, true);
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
