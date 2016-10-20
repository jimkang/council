var d3 = require('d3-selection');
var drawTear = require('./draw-tear');
var accessor = require('accessor');
var getCouncil = require('./get-council');
var handleError = require('./handle-error');
var sb = require('standard-bail')();

var getId = accessor();

function renderDisplayProblem({problem, setRoute}) {
  d3.selectAll('body > section:not(#display-problem)').classed('hidden', true);

  d3.select('.change-council-button').on('click', changeCouncil);

  var displaySection = d3.select('#display-problem');
  displaySection.classed('hidden', false);

  displaySection.select('.edit-button').on('click', edit);

  var choiceRoot = displaySection.select('.choice-root');
  var choices = choiceRoot.selectAll('.choice').data(problem.choices, getId);

  choices.exit().remove();

  var newChoices = choices.enter().append('li').classed('choice', true);
  newChoices.append('div').classed('presenter', true).append('img');
  var choiceTextContainers =
    newChoices.append('div').classed('dialogue-text-container', true);
  renderTextContainerContents(choiceTextContainers);

  var updateChoices = newChoices.merge(choices);
  updateChoices.attr('id', getId);
  updateChoices.selectAll('.presenter img').attr('src', accessor('presenterImageURL'));
  updateChoices.selectAll('.dialogue-text').text(accessor('text'));

  renderTextContainerContents(displaySection.select('.problem .dialogue-text-container'));
  displaySection.select('.problem .dialogue-text').text(problem.text);  

  function edit() {
    displaySection.classed('hidden', true);
    setRoute('/problem/' + problem.id + '/edit');
  }

  function changeCouncil() {
    getCouncil({numberOfMembers: problem.choices.length}, sb(updateCouncil, handleError));
  }

  function updateCouncil(members) {
    console.log(members);
    for (var i = 0; i < members.length && i < problem.choices.length; ++i) {
      problem.choices[i].presenterImageURL = members[i];
    }
    renderDisplayProblem({problem, setRoute});
  }
}

// TODO: Do you really need a unique tear for each dialogue-text?
function renderTextContainerContents(textContainers) {
  ensureExists(textContainers, 'div', 'dialogue-text');
  
  drawTear({
    svg: ensureExists(textContainers, 'svg', 'top-paper-edge'),
    direction: [0, -1],
    length: 1500,
    maxThickness: 5
  });

  drawTear({
    svg: ensureExists(textContainers, 'svg', 'bottom-paper-edge'),
    direction: [0, 1],
    length: 1500,
    maxThickness: 5
  });

  drawTear({
    svg: ensureExists(textContainers, 'svg', 'left-paper-edge'),
    direction: [-1, 0],
    length: 1000,
    maxThickness: 10
  });

  drawTear({
    svg: ensureExists(textContainers, 'svg', 'right-paper-edge'),
    direction: [1, 0],
    length: 1000,
    maxThickness: 10
  });
}

function ensureExists(parentSelection, elementType, className) {
  var existing = parentSelection.select('.' + className);
  if (existing.empty()) {
    existing = parentSelection.append(elementType).classed(className, true);
  }
  return existing;
}

module.exports = renderDisplayProblem;
