var person = {
  name: 'greg',
  age: 17,
  sayName: function () {
    console.log( this.name );
  },
  bio: function (flavour, thing) {
    console.log('My name is', this.name, 'and i love', flavour, thing);
  }
};

person.sayName();
