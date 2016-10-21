var d3 = require('d3-selection');
var drawTear = require('./draw-tear');
var accessor = require('accessor');
var getCouncil = require('./get-council');
var handleError = require('./handle-error');
var sb = require('standard-bail')();

var getId = accessor();


function renderDisplayProblem({problem, setRoute}) {
  d3.selectAll('body > section:not(#display-problem)').classed('hidden', true);

  d3.select('.change-council-link').on('click', changeCouncil);

  var displaySection = d3.select('#display-problem');
  displaySection.classed('hidden', false);

  displaySection.select('.edit-button').on('click', edit);

  var choiceRoot = displaySection.select('.choice-root');
  var choices = choiceRoot.selectAll('.choice').data(problem.choices, getId);

  choices.exit().remove();

  var newChoices = choices.enter().append('li').classed('choice', true);
  newChoices.append('div').classed('presenter', true).append('img');

  newChoices
    .append('svg').classed('dialogue-text-board', true)
    // TODO: Why is this 0px by 0px?
    .append('foreignObject')
      .attr('width', '100%')
      .attr('height', '100%')
    .append('div').classed('dialogue-text-container', true)
    .append('div').classed('dialogue-text', true);

  // renderTextContainerContents(choiceTextContainers);

  var updateChoices = newChoices.merge(choices);
  updateChoices.attr('id', getId);
  updateChoices.selectAll('.presenter img').attr('src', accessor('presenterImageURL'));
  updateChoices.selectAll('.dialogue-text').text(accessor('text'));

  // renderTextContainerContents(displaySection.select('.problem .dialogue-text-container'));
  displaySection.select('.problem .dialogue-text').text(problem.text);

  // This must go after the .dialogue-text contents are updated.
  renderTears(displaySection.selectAll('.dialogue-text-board'));

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

function renderTears(textBoards) {
  const tearWidth = 5;

  textBoards.selectAll('foreignObject')
    .attr('width', getForeignObjectWidth)
    .attr('height', getForeignObjectHeight);

  // Changing the width of the board changes the width of the foreignObjects, as they
  // are initially set to 100%. So, do that before changing the width of the board.
  textBoards
    .attr('width', getBoardWidth)
    .attr('height', getBoardHeight);

  // Use path directions as data.
  var paths = textBoards.selectAll('.tear-path')
    .data([[0, -1], [0, 1], [-1, 0], [1, 0]]);
  
  var updatePaths = paths
    .enter().append('path').classed('tear-path', true)
    .merge(paths);
  
  updatePaths
    .attr('d', getPathDirections)
    .attr('transform', getPathTransform);

  function getBoardWidth() {
    return getWidthOfTextContainer(d3.select(this)) + 2 * tearWidth;
  }

  function getBoardHeight() {
    return getHeightOfTextContainer(d3.select(this)) + 2 * tearWidth;
  }

  function getForeignObjectWidth() {
    return getWidthOfTextContainer(d3.select(this));
  }

  function getForeignObjectHeight() {
    return getHeightOfTextContainer(d3.select(this));    
  }

  function getPathDirections(direction) {
    var tearOpts = {
      direction: direction,
      maxThickness: tearWidth
    };

    var lengthAttr = 'height';
    if (direction[0] === 0) {
      lengthAttr = 'width';
    }
    tearOpts.length = d3.select(this.parentNode).attr(lengthAttr);

    return drawTear(tearOpts);
  }

  function getPathTransform(direction) {
    var x = 0;
    var y = 0;
    if (direction[0] > 0) {
      x = d3.select(this.parentNode).attr('width') - tearWidth;
    }
    if (direction[1] > 0) {
      y = d3.select(this.parentNode).attr('height') - tearWidth;
    }
    return `translate(${x}, ${y})`;
  }
}

function getHeightOfTextContainer(parentSel) {
  var textContainer = parentSel.select('.dialogue-text-container');
  return textContainer.node().clientHeight;
}

function getWidthOfTextContainer(parentSel) {
  var textContainer = parentSel.select('.dialogue-text-container');
  return textContainer.node().clientWidth;
}

module.exports = renderDisplayProblem;
