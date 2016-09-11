var d3 = require('d3-selection');
var createChoice = require('./create-choice');
var callNextTick = require('call-next-tick');
var accessor = require('accessor');

var getId = accessor();

function renderEditProblem({problem, commitChanges}) {
  var editSection = d3.select('#edit-problem');
  editSection.classed('hidden', false);

  editSection.select('.add-choice-button').on('click', addChoice);

  editSection.select('.problem .problem-text').datum(problem)
    .text(problem.problemText)
    .on('blur', onEndProblemTextEdit);

  var choiceRoot = editSection.select('.choice-root');
  var choices = choiceRoot.selectAll('.choice').data(problem.choices, getId);

  choices.exit().remove();

  var newChoices = choices.enter().append('li').classed('choice', true);
  newChoices.append('img').classed('presenter', true);
  newChoices.append('div')
    .classed('choice-text', true)
    .attr('contenteditable', true)
    .on('blur', onEndChoiceEdit);

  var updateChoices = newChoices.merge(choices);
  updateChoices.attr('id', getId);
  updateChoices.selectAll('.presenter').attr('src', accessor('presenterImageURL'));
  updateChoices.selectAll('.choice-text').text(accessor('text'));

  function addChoice() {
    problem.choices.push(createChoice());
    callNextTick(
      renderEditProblem, {problem: problem, commitChanges: commitChanges}
    );
  }

  function onEndProblemTextEdit(p) {
    p.problemText = this.textContent;
    commitChanges(problem);
  }

  function onEndChoiceEdit(choice) {
    choice.text = this.textContent;
    commitChanges(problem);
  }
}

module.exports = renderEditProblem;
