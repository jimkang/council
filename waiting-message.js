var d3 = require('d3-selection');

function WaitingMessage({ messageElementSelector }) {
  var messageSel = d3.selectAll(messageElementSelector);

  return {
    show,
    hide
  };

  function show({ message }) {
    messageSel.text(message);
    messageSel.classed('animate-waiting', true);
    messageSel.classed('hidden', false);
  }

  function hide() {
    messageSel.classed('animate-waiting', false);
    messageSel.classed('hidden', true);
  }
}

module.exports = WaitingMessage;
