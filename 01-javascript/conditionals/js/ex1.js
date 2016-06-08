/*
What number's bigger?

Write a function named greaterNum that:

takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

var greaterNum = function (n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}

console.log( greaterNum(  1000, 5 ) );
console.log( greaterNum( 'hotdog', 'goldfish' ));
