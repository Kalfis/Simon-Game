Need to create some sort of run game function here to run the whole thing.








Here I added a function to create a random array with the numbers 1 to 4 in order to simulate randomly choosing colors, the colors have a number value associated with them in index.html.




Calling the function to generate random color sequence.

Here I am attempting to create a function that will light up the random cpuColors for a short time. It is based on a simon game I found on GitHub.











This is part of the function to have colors light up. Colors that will light up because they are cpuColors or the ones that the player chose will have the class 'lit' added to them to change the opacity from 0.6 to 1. After they are lit, they will have the class removed in order to simulate the lighting ging away.






Adding the buttons to the colored divs in the index.html file.











Making an array from the colors that the player clicks by pushing the corresponding number into the player array for the color that was clicked.























A function to check if the playerColors array is the same length as the cpuColors array, if it is not then the player automatically loses.








A function to check if the arrays of the player and the cpu match, if they do not then the player automatically loses, if they do then the game will run again.
