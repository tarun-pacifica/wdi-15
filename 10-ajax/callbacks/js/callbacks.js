// // A callback is a function passed into another function
//
// setTimeout(function () {
//   console.log('B. I love hotdogs');
// }, 4000);
//
// console.log('A. goldfish');

// console.log('Before ready');
//
// $(document).ready(function () {
//   console.log('During ready');
// });
//
// console.log('After ready');

$(document).ready(function () {
  var magic;
  $('h1').on('click', function () {
    magic = Math.random();
    console.log(magic);
  });
});

console.log(magic);
