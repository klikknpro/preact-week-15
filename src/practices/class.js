// CLASS
// valamilyen uzleti logikat (pl.: greet) egy adott adatstrukturahoz akarunk kotni

// function person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log(`Hello, my name is ${this.name}.`);
//   };
// }

//////////
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

class Policeman extends Person {
  constructor(name, age, rank) {
    super();
    this.rank = rank;
  }
  arrest() {
    console.log(`I'm a ${this.rank}, so you're fcked!`);
  }
}

const policeman1 = new Policeman("Jack", 45, "ranger");
const policeman2 = new Policeman("Harvey", 30, "captain");
policeman1.greet();
policeman1.arrest();
policeman2.greet();
policeman2.arrest();
/////////

// const person4 = new Person("John", 25);
// const person5 = new Person("Kate", 28);

// person4.greet();
// person5.greet();

// const person1 = {
//   name: "John",
//   age: 35,
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}.`);
//   },
// };

// const person2 = {
//   name: "Dave",
//   age: 28,
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}.`);
//   },
// };

// const person3 = {
//   name: "Kate",
//   age: 30,
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}.`);
//   },
// };

// person1.greet();
// person2.greet();
// person3.greet();

// const greeting = (person) => {
//   console.log(`Hello, my name is ${person.name}.`);
// };

// greeting(person1);
