/*
The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:

takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

var tellFortune = function (numKids, partner, location, jobTitle) {
  return "You will be a " + jobTitle + " in " + location + ", and married to " + partner + " with " + numKids + " kids.";
};

var result = tellFortune(7, 'Craigsy', 'Auckland', 'Dry cleaner');
console.log(result);
