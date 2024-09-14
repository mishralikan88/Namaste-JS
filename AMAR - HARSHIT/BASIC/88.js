// super -

// In JavaScript, super is a keyword used within classes that extends another class (a subclass). It allows you to call methods and access properties from the parent class (superclass) within the subclass.

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  isSuperCute() {
    return this.age <= 1;
  }

  isCute() {
    return true;
  }
}

class Dog extends Animal {

  // child class constructor function initialises only the child specific properties and makes a super constructor call to initialise parent class properties.

  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }

  run() {
    return `${this.name} is running at ${this.speed}kmph`;
  }
}
// object or instance
const tommy = new Dog("tommy", 3, 45);
console.log(tommy.run());
