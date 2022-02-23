const person1 = {
  name: "John",
  age: 35,
};

const person2 = {
  name: "Dave",
  age: 28,
};

const person3 = {
  name: "Kate",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person3.greet(person3);

// const greeting = (person) => {
//   console.log(`Hello, my name is ${person.name}.`);
// };

// greeting(person1);
