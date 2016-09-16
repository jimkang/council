var d3 = require('d3-selection');
var accessor = require('accessor');

var getId = accessor();

function renderDisplayProblem({problem, setRoute}) {
  var displaySection = d3.select('#display-problem');
  displaySection.classed('hidden', false);

  displaySection.select('.edit-button').on('click', edit);

  displaySection.select('.problem .problem-text').datum(problem)
    .text(problem.text);

  var choiceRoot = displaySection.select('.choice-root');
  var choices = choiceRoot.selectAll('.choice').data(problem.choices, getId);

  choices.exit().remove();

  var newChoices = choices.enter().append('li').classed('choice', true);
  newChoices.append('div').classed('presenter', true).append('img');
  newChoices.append('div')
    .classed('choice-text', true);

  var updateChoices = newChoices.merge(choices);
  updateChoices.attr('id', getId);
  updateChoices.selectAll('.presenter img').attr('src', accessor('presenterImageURL'));
  updateChoices.selectAll('.choice-text').text(accessor('text'));

  function edit() {
    displaySection.classed('hidden', true);
    setRoute('/problem/' + problem.id + '/edit');
  }
}

module.exports = renderDisplayProblem;
