

var randomSequence = function() {
  var cpuArray = [Math.floor((Math.random()*4)+1), Math.floor((Math.random()*4)+1), Math.floor((Math.random()*4)+1), Math.floor((Math.random()*4)+1)];
  return cpuArray;
}

var cpuColors = randomSequence();

var redButton = $('<button/>');
redButton.addClass('red');

var blueButton = $('<button/>');
blueButton.addClass('blue');

var yellowButton = $('<button/>');
yellowButton.addClass('yellow');

var greenButton = $('<button/>');
greenButton.addClass('green');

var playerColors = new Array();

$('.red').click(function(){
  console.log('red was clicked');
  playerColors.push(1)
});

$('.blue').click(function(){
  console.log('blue was clicked');
  playerColors.push(2)
});

$('.yellow').click(function(){
  console.log('yellow was clicked');
  playerColors.push(3)
});

$('.green').click(function(){
  console.log('green was clicked');
  playerColors.push(4)
});

var match = function(){
  cpuColors === playerColors
}
