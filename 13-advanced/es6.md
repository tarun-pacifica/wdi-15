┌─────────────────────────┐
│                         │██
│                         │██
│         ES6 ?           │██
│                         │██
│                         │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████

---
### Well, what is it?

The Javascript core language features are defined in a
standard called ECMA-262.

The language defined in this standard is called ECMAScript,
of which the Javascript that runs in browsers (or Node) is
a superset (adding the DOM, Javascript APIs etc.)

The committee called TC-39 are the people that guide the
future of Javascript.

---
### History of Ecmascript

It is incredibly important that work on ES still occurs, it
is what defines what happens next with Javascript.

[ES History](https://en.wikipedia.org/wiki/ECMAScript)

- Brendan Eich's Javascript - 10 days in May 1995
- June 1997 - ES1
- June 1998 - ES2
- June 1999 - This is what we teach, at added lots of things
  (RegExp, better strings, more control statements, better errors)
- 2007 - ES3.1
- December 2009 - ES5
- June 2015 - ES6 || ES2015 || ES Harmony || ES Next

---
### What now?

We still teach ES3 here for browser compatibility.

ES5 works from IE9ish

ES6 doesn't work fully in any current browser - 92% in this browser
    See [here](https://kangax.github.io/compat-table/es6/)

There are ways around this!

---
### Enter [Babel](https://babeljs.io/)

> The compiler for writing next generation Javascript today

Built by Sebastian McKenzie (a guy from Wodonga)
- [Twitter](https://twitter.com/sebmck)
- [Github](https://github.com/kittens)

[See here](https://medium.com/@sebmck/2015-in-review-51ac7035e272#.h8m88g6xj)

Babel allows us to write ES6 code today and get it converted to things
that will be able to run in the browser.

---
### Let's use Babel

```
rails new es6-demo
rails generate controller pages demo
```

```
# Gemfile
gem 'sprockets'
gem 'sprockets-es6'

# config/routes.rb
root 'pages#demo'
```

And change the file extension of app/assets/javascripts/pages.coffee to be ` .es6 `

---
### We now have an ES6 Environment!

We can start playing out with a couple of things. My 10 favourite features are:

- ` let `
- ` const `
- Default parameters
- Interpolation
- Arrow functions
- Spread and rest parameters
- Destructuring
- "Classes"
- Promises
- New methods

---
### [Types of Variables](https://bit.ly/1o1sWrZ)

This is all related to scope...

Var has function scope

Let has block scope

Const also has block scope

---
### Ways to use them...

let - if you want variables to be constrained

const - if you never want variables to be redefined (DAYS_OF_THE_WEEK)

---
### [Default Parameters](https://bit.ly/1mrbV90)

```javascript

var sayHello = function (name = "World") {
  console.log( "Hello " + name );
};

sayHello(); // => "Hello World"

sayHello("person"); // => "Hello person"

```

---
### [Interpolation](https://bit.ly/1Q6k5v2)

```javascript

let name = "World";

let greeting = `Hello ${name}`;

```

---
### [Arrow Functions (shorthand)](https://bit.ly/1PjUlOK)

```javascript

let randomNum = () => Math.random();

let sum = (a, b) => a + b;

$("body").click((e) =>
  console.log("Hello");
);

```

---
### Spread and Rest Parameters

Rest turns into an array (always used when receiving parameters)

Spread turns them into individual arguments

```javascript

var putInAlphabeticalOrder = function (...letters) {
  return letters.sort();
};

console.log( putInAlphabeticalOrder("b", "z", "l") );

Math.max( ...[1, 4, 6, 2] ); // => 6

```

---
### Destructuring

```javascript

let [firstNum, secondNum] = [1, 2];

let {name} = { name: "Hello" };

```

---
### Classes

```javascript

class Car {
    constructor (make) {
        this.make = make;
    }

    printCurrentSpeed () {}
}

class RaceCar extends Car {}

let car = new Car("Tesla");

```

---
### Promises

The idea of .then and .done...

---
### New things

There are lots!

New methods for most types of things

New types of data (Symbols, Maps, Promises etc.)

---
### There are lots of things here...

Just keep an eye on it!