// Cat factory
var createCat = function (age, furColor, limbs) {
  // Set a default of 4 if limbs is not provided
  if (limbs === undefined) {
    limbs = 4;
  }

  return {
    "age": age,
    "furColor": furColor,
    "limbs": limbs,
    "ears": true,
    "eyeColor": eyeColor,
    "meow": function () {
      console.log('Meow');
    },
    "eat": function (food) {
      console.log('Yum, I love to eat ' + food);
    }
  };
};

var lizzie = createCat(18, 'grey');
var daemon = createCat(1, 'black', 3);
var angel = createCat(17, 'orange');

var cats = [
  createCat('Cooper', 'tabby'),
  createCat('Audrey', 'tabby')
];
