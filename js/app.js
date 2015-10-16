
var runGame = function() {

var randomSequence = function() {
  var cpuArray = [Math.floor((Math.random()*4)+1), Math.floor((Math.random()*4)+1), Math.floor((Math.random()*4)+1), Math.floor((Math.random()*4)+1)];
  return cpuArray;
}

var cpuColors = randomSequence();
/*
function animate(cpuColors) {
  var i = 0;
  var interval = setInterval(function() {
    lightUp(cpuColors[i]); i++;
    if(i >= cpuColors.length) {
      clearInterval(interval);
    }
  }, 600);
}
*/

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


//seperate check function from game functions in order to tell check function to run game function again if player wins
function checkClicks(cpuColors, playerColors) {
if (cpuColors.length === playerColors.length){
    checkMatch();
}
else {
    return "lose"
}
}

function checkMatch(cpuColors, playerColors){

for(var i = 0; i < cpuColors.length; i++) {
  if(cpuColors[i] !== playerColors[i]) {
    return "lose";
  }
}
return runGame();
}
checkMatch(cpuColors, playerColors);

}
