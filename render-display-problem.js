var d3 = require('d3-selection');
var drawTear = require('./draw-tear');
var accessor = require('accessor');
var getCouncil = require('./get-council');
var handleError = require('./handle-error');
var sb = require('standard-bail')();

var getId = accessor();
const tearWidth = 5;

function renderDisplayProblem({problem, commitChanges, setRoute}) {
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
    .append('foreignObject')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('x', tearWidth)
      .attr('y', tearWidth)
    // Using the namespace when appending an html element to a foreignObject is
    // incredibly important. Without it, a div will not size itself correctly for its contents.
    .append('xhtml:div').classed('dialogue-text-container', true)
    .append('xhtml:div').classed('dialogue-text', true);

  var updateChoices = newChoices.merge(choices);
  updateChoices.attr('id', getId);
  updateChoices.selectAll('.presenter img').attr('src', accessor('presenterImageURL'));
  updateChoices.selectAll('.dialogue-text').text(accessor('text'));

  displaySection.select('.problem .dialogue-text').text(problem.text);

  // This must go after the .dialogue-text contents are updated.
  // Hack: If this is called immediately, the clientHeight will not be correct yet.  
  setTimeout(callRenderTears, 100);

  function callRenderTears() {
    renderTears(displaySection.selectAll('.dialogue-text-board'));
  }

  function edit() {
    displaySection.classed('hidden', true);
    setRoute('/problem/' + problem.id + '/edit');
  }

  function changeCouncil() {
    getCouncil({numberOfMembers: problem.choices.length}, sb(updateCouncil, handleError));
  }

  function updateCouncil(members) {
    // console.log(members);
    for (var i = 0; i < members.length && i < problem.choices.length; ++i) {
      problem.choices[i].presenterImageURL = members[i];
    }
    commitChanges(problem, handleError);
    renderDisplayProblem({
      problem: problem,
      commitChanges: commitChanges,
      setRoute: setRoute
    });
  }
}

function renderTears(textBoards) {
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
    return getWidthOfTextElement(d3.select(this)) + 2 * tearWidth;
  }

  function getBoardHeight() {
    return getHeightOfTextElement(d3.select(this)) + 2 * tearWidth;
  }

  function getForeignObjectWidth() {
    return getWidthOfTextElement(d3.select(this));
  }

  function getForeignObjectHeight() {
    return getHeightOfTextElement(d3.select(this));
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
      x = d3.select(this.parentNode).attr('width') - tearWidth - 1;
    }
    if (direction[1] > 0) {
      y = d3.select(this.parentNode).attr('height') - tearWidth - 1;
    }
    // Safari needs the -1; Chrome and Firefox do not.
    return `translate(${x}, ${y})`;
  }
}

function getHeightOfTextElement(parentSel) {
  var textContainer = parentSel.select('.dialogue-text');
  return textContainer.node().clientHeight;
}

function getWidthOfTextElement(parentSel) {
  var textContainer = parentSel.select('.dialogue-text');
  return textContainer.node().clientWidth;
}

module.exports = renderDisplayProblem;
