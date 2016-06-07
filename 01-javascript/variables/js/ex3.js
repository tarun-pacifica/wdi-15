/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
*/

var currentAge = 27;
var maximumAge = 45;
var amountPerDay = 12;

var amountPerYear = amountPerDay * 365.25;
var yearsRemaining = maximumAge - currentAge;

var amountRemaining = amountPerYear * yearsRemaining;

var message = "You will need " + amountRemaining + " to last you until the ripe old age of " + maximumAge;

console.log(message);
