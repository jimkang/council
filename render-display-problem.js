var d3 = require('d3-selection');
var accessor = require('accessor');
var probable = require('probable');
var shape = require('d3-shape');
var range = require('d3-array').range;

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

function drawTear({svg, direction, length, maxThickness}) {
  const tearFreq = 4;

  var area = shape.area();
  area.curve(shape.curveLinear);
  var line = shape.line();
  line.curve(shape.curveLinear);

  var width;
  var height;

  if (direction[1] === 0) {
    area.x0(direction[0] < 0 ? maxThickness : 0);
    area.x1(getCurrentThickness);

    area.y(identity);
    width = maxThickness;
    height = length;
  }
  else {
    area.y0(direction[1] < 0 ? maxThickness : 0);
    area.y1(getCurrentThickness);
    area.x(identity);
    width = length;
    height = maxThickness;
  }

  var stretchPref = 'xMinYMin';
  if (direction[0] < 0 || direction[1] < 0) {
    stretchPref = 'xMaxYMax';
  }

  var pathDirections = area(range(tearFreq, length - tearFreq, tearFreq));

  svg
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', stretchPref)
    .append('path').attr('d', pathDirections);
  
  function getCurrentThickness(p) {
    var currentThickness = 0;
    if (p === 0 || p >= length - tearFreq) {
      if (direction[0] < 0 || direction[1] < 0) {
        currentThickness = maxThickness;
      }
    }
    else {
      if (direction[0] < 0 || direction[1] < 0) {
        currentThickness = maxThickness/2 + Math.sin(p/10) * maxThickness/2;
      }
      else {
        currentThickness = maxThickness/2 - Math.sin(p/10) * maxThickness/2;
      }

      currentThickness += Math.sin(p/4) * maxThickness/6;

      if (probable.roll(2) === 0) {
        currentThickness += probable.rollDie(maxThickness/5);
      }
      else {
        currentThickness -= probable.rollDie(maxThickness/5);
      }
    }
    return currentThickness;
  }
}

function identity(x) {
  return x;
}


module.exports = renderDisplayProblem;
