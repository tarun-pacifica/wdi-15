var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Iterate through numbers and log each number to the console
_.each(numbers, function (n) {
  console.log(n);
});

// Iterate through numbers and multiply each one of them by 5
var fives = _.map(numbers, function (n) {
  return n * 5;
});
console.log(fives);

// Iterate through numbers and reduce it by adding them together
var sum = _.reduce(numbers, function (s, n) {
  return s + n;
}, 0);
console.log(sum);

// Get an array of all of the people in people that have the username "E"
var eUsers = _.where(people, {username: 'E'});
console.log(eUsers); // Array of objects

// Find the first object in people that has the id of 3
var user = _.findWhere(people, {id: 3});
console.log(user); // Single object

// Find the first person who has an age of less than 50
var youngPerson = _.findWhere(people, function (p) {
  return p.age < 50;
});
console.log(youngPerson);

// Get an array of all of the people with an age of over 60
var oldPeople = _.filter(people, function (p) {
  return p.age > 60;
});
console.log(oldPeople);

// Remove all of the people with an age less than 40
var youngPeople = _.reject(people, function (p) {
  return p.age < 40;
});
console.log(youngPeople);
