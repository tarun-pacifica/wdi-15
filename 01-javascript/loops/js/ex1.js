/*
The even/odd reporter

Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
*/

for (var n = 0; n <= 20; n++) {
  if (n % 2 === 0) {
    console.log(n + ' is even');
  } else {
    console.log(n + ' is odd');
  }
}
