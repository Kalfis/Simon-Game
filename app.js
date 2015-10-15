
var randomSequence = function() {
  var cpuArray = [Math.floor((Math.random()*4)+1), Math.floor((Math.random()*4)+1), Math.floor((Math.random()*4)+1), Math.floor((Math.random()*4)+1)];
  return cpuArray
}
randomSequence();

var redButton = $('<span>');
redButton.addClass('red');

var blueButton = $('<span>');
blueButton.addClass('blue');

var yellowButton = $('<span>');
yellowButton.addClass('yellow');

var greenButton = $('<span>');
greenButton.addClass('green');
