class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    // dont use function keyword
    return `${this.name} is eating`;
  }

  isSuperCute() {
    return this.age <= 1;
  }

  isCute() {
    return true;
  }
}

// Inheritance - child class obj has access to its own class props and methods + its base class props and methods.But vice versa is not true.

class Dog extends Animal {} // Animal - super/parent/base class  , Dog - sub/child/derived class

// object/instance creation
const tommy = new Dog("tommy", 3); // Animal constructor used.

console.log(tommy);
console.log(tommy.isCute());
