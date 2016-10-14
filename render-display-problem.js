var d3 = require('d3-selection');
var drawTear = require('./draw-tear');
var accessor = require('accessor');

var getId = accessor();

function renderDisplayProblem({problem, setRoute}) {
  d3.selectAll('body > section:not(#display-problem)').classed('hidden', true);

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
  var textContainers = newChoices
    .append('div').classed('dialogue-text-container', true);
  createTextContainerContents(textContainers);

  var updateChoices = newChoices.merge(choices);
  updateChoices.attr('id', getId);
  updateChoices.selectAll('.presenter img').attr('src', accessor('presenterImageURL'));
  updateChoices.selectAll('.dialogue-text').text(accessor('text'));

  function edit() {
    displaySection.classed('hidden', true);
    setRoute('/problem/' + problem.id + '/edit');
  }
}

// TODO: Do you really need a unique tear for each dialogue-text?
function createTextContainerContents(textContainers) {
  textContainers.append('div').classed('dialogue-text', true);
  drawTear({
    svg: textContainers.append('svg').classed('top-paper-edge', true),
    direction: [0, -1],
    length: 1500,
    maxThickness: 5
  });

  drawTear({
    svg: textContainers.append('svg').classed('bottom-paper-edge', true),
    direction: [0, 1],
    length: 1500,
    maxThickness: 5
  });

  drawTear({
    svg: textContainers.append('svg').classed('left-paper-edge', true),
    direction: [-1, 0],
    length: 1000,
    maxThickness: 10
  });

  drawTear({
    svg: textContainers.append('svg').classed('right-paper-edge', true),
    direction: [1, 0],
    length: 1000,
    maxThickness: 10
  });
}

module.exports = renderDisplayProblem;
