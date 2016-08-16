// // Node.js
// var fs = require('fs');
//
// var filename = 'hello.txt';
//
// var buffer = fs.readFileSync(filename); // SYNCHRONOUS: DOESN'T USE CALLBACKS
// var lines = buffer.toString().split('\n');
//
// lines.forEach(function (element) {
//   console.log(element);
// });

var fs = require('fs');

var filename = 'hello.txt';

fs.readFile(filename, function (err, data) {
  var lines = data.toString().split('\n');
  lines.forEach(function (element) {
    console.log(element);
  })
});

console.log('look at how asynchronous i am');
