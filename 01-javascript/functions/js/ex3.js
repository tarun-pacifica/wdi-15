/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:

takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

var calculateSupply = function (age, amountPerDay) {
  var maxAge = 75;
  var amountPerYear = amountPerDay * 365.25; // Including leap years.
  var yearsRemaining = maxAge - age;

  var amountRequired = amountPerYear * yearsRemaining;
  return "You will need " + Math.ceil(amountRequired) + " to last you until the ripe old age of " + maxAge;
};

var output = calculateSupply(17, 1);
console.log( output );

output = calculateSupply(74, 100.7);
console.log( output );

output = calculateSupply(80, 24);
console.log( output );
