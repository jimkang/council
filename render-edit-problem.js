var d3 = require('d3-selection');
var createChoice = require('./create-choice');
var callNextTick = require('call-next-tick');
var accessor = require('accessor');
var handleError = require('./handle-error');
var tornPaperBoxKit = require('./torn-paper-box-kit');

var getId = accessor();

function renderEditProblem({problem, commitChanges, setRoute}) {
  d3.selectAll('body > section:not(#edit-problem)').classed('hidden', true);

  var originalOpts = arguments[0];
  var editSection = d3.select('#edit-problem');
  editSection.classed('hidden', false);

  editSection.select('.add-choice-button').on('click', addChoice);
  editSection.select('.view-button').on('click', view);

  editSection.select('.problem .dialogue-text').datum(problem)
    .text(problem.text)
    .on('click', addEditingClass)
    .on('blur', onEndProblemTextEdit);

  var choiceRoot = editSection.select('.choice-root');
  var choices = choiceRoot.selectAll('.choice').data(problem.choices, getId);

  choices.exit().remove();

  var newChoices = choices.enter().append('li').classed('choice', true);
  tornPaperBoxKit.setUpTornPaperBoxes(newChoices);

  newChoices.selectAll('.dialogue-text')
    .attr('contenteditable', true)
    .on('click', addEditingClass)
    .on('blur', onEndChoiceEdit);

  var updateChoices = newChoices.merge(choices);
  updateChoices.attr('id', getId);
  updateChoices.selectAll('.dialogue-text').text(accessor('text'));

  tornPaperBoxKit.renderTearsAfterDelay(editSection);

  function addChoice() {
    problem.choices.push(createChoice());
    callNextTick(renderEditProblem, originalOpts);
  }

  function onEndProblemTextEdit(p) {
    this.classList.remove('editing');
    p.text = this.textContent;
    commitChanges(problem, handleError);
  }

  function onEndChoiceEdit(choice) {
    this.classList.remove('editing');
    choice.text = this.textContent;
    commitChanges(problem, handleError);
    renderEditProblem({
      problem: problem,
      commitChanges: commitChanges,
      setRoute: setRoute
    });
  }

  function addEditingClass() {
    this.classList.add('editing');
  }

  function view() {
    editSection.classed('hidden', true);
    setRoute('/problem/' + problem.id);
  }
}

module.exports = renderEditProblem;
