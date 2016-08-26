// Variables scopes

const DAYS_PER_WEEK = 7;

let hello = function () {
  const name = 'Greg';

  for (let i = 0; i < 5; i++) {
    console.log('Hello old ' + name);
  }

};

hello();


// Default parameters

let sayHello = function (name = "World") {
  console.log( "Hello " + name );
};
sayHello();
sayHello('Tripti');


// Interpolation

let name = "World";

let greeting = `Hello ${name}`;
let result = `The answer is ${ 5 * 27 }`;

console.log(greeting, result);


// Arrow functions

let foo = () => {
  console.log('you are all fools');
}

foo();

// One liners don't require curlies
let sum = (a, b) => a + b; // Implicit return!


// Spread and rest parameters

var putInAlphabeticalOrder = function (...letters) {
  return letters.sort();
};

putInAlphabeticalOrder('a', 'b', 'q', 'b', 's');


// Destructuring

let [firstNum, secondNum] = [1, 2];

let {name} = { name: "Hello" };
