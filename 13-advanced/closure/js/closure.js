// var count = 0;
//
// var counter = function () {
//   count += 1;
//   return count;
// };

// var counter = {
//   count: 0,
//   increment: function () {
//     return this.count++;
//   }
// }

var counterFactory = function () {
  var count = 0; // Closure
  return function () {
    count++;
    return count;
  }
}

var counterA = counterFactory();
var counterB = counterFactory();
