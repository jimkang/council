var d3 = require('d3-selection');
var accessor = require('accessor');
var changeCouncil = require('./change-council');
var handleError = require('handle-error-web');
var tornPaperBoxKit = require('./torn-paper-box-kit');
var WaitingMessage = require('./waiting-message');

var getId = accessor();
var waitingMessage = WaitingMessage({
  messageElementSelector: '#display-problem .waiting-message'
});

function renderDisplayProblem({
  problem,
  onDisplayProblemUpdate,
  onEdit,
  onRememberProblem,
  onNew,
  onList
}) {
  d3.selectAll('body > section:not(#display-problem)').classed('hidden', true);
  // Go to the top of the page.
  document.body.scrollTop = 0;

  d3.select('#change-council-link').on('click', updateCouncil);

  var displaySection = d3.select('#display-problem');
  displaySection.classed('hidden', false);

  displaySection.select('.edit-button').on('click', edit);
  displaySection.select('.remember-button').on('click', onRememberClick);
  displaySection.select('.new-button').on('click', onNewButtonClicked);
  displaySection.select('.list-button').on('click', onList);

  var choiceRoot = displaySection.select('.choice-root');
  var choices = choiceRoot.selectAll('.choice').data(problem.choices, getId);
  // Also (re-)bind data to img elements so accessors using them work with current data.
  choices.select('.presenter img');

  choices.exit().remove();

  var newChoices = choices
    .enter()
    .append('li')
    .classed('choice', true)
    .classed('centered-col', true);
  newChoices
    .append('div')
    .classed('presenter', true)
    .append('a')
    .classed('attribution-link', true)
    .append('img');

  tornPaperBoxKit.setUpTornPaperBoxes(newChoices);

  var updateChoices = newChoices.merge(choices);
  updateChoices.attr('id', getId);
  updateChoices
    .select('.presenter img')
    .attr('src', accessor('presenterImageURL'))
    .attr('alt', accessor('imageTitle'));
  updateChoices
    .select('.attribution-link')
    .attr('href', accessor('imageSource'));

  updateChoices.select('.dialogue-text').text(accessor('text'));

  displaySection.select('.problem .dialogue-text').text(problem.text);

  tornPaperBoxKit.renderTearsAfterDelay(displaySection);

  function edit() {
    displaySection.classed('hidden', true);
    onEdit();
  }

  function updateCouncil() {
    waitingMessage.show({ message: 'Gathering new blood for the council..' });
    changeCouncil(problem, useNewCouncil);

    function useNewCouncil(error, problem) {
      waitingMessage.hide();

      if (error) {
        handleError(error);
      } else {
        onDisplayProblemUpdate(problem);
      }
    }
  }

  function onRememberClick() {
    onRememberProblem(problem);
  }

  function onNewButtonClicked() {
    onNew({ waitingMessage });
  }
}

module.exports = renderDisplayProblem;
