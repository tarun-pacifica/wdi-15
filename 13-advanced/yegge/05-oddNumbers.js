// Write function to print the odd numbers from 1 to 99.

var oddNumbers = function (upperLimit) {
  if (! upperLimit) {
    upperLimit = 99;
  }

  for (var i = 1; i <= upperLimit; i += 2) {
    console.log(i);
  }
};

oddNumbers();
