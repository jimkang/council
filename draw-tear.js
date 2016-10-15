var probable = require('probable');
var shape = require('d3-shape');
var range = require('d3-array').range;

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

module.exports = drawTear;
