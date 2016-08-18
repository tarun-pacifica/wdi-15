var fs = require('fs');

var sumFile = function (filename) {
  // Returns the integer of string i or 0 if i is not a number
  var int = function (i) {
    i = parseInt(i);
    return isNaN(i) ? 0 : i;
  };

  var buffer = fs.readFileSync(filename);
  var lines = buffer.toString().split('\n');

  return lines.reduce(function (sum, i) {
    return sum + int(i);
  }, 0);
};

console.log( sumFile('numbers.txt') );
