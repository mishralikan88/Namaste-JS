
// Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one class (the child or subclass) to inherit properties and methods from another class (the parent or superclass). This helps in creating a hierarchy of classes where more specific classes extend or modify the behavior of more general classes.



// 1. Inheriting Properties and Methods (Basic Inheritance)
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

class Dog extends Animal { }

const tommy = new Dog("tommy", 3);

console.log(tommy); // Output: Dog { name: 'tommy', age: 3 }
console.log(tommy.isCute()); // Output: true

// Scenario: Dog inherits properties and methods from Animal without adding or modifying anything.
// Use Case: Use inheritance to extend a base class when you need to reuse its functionality.




// 2. Extending with Additional Methods (Adding New Methods to Child Class)

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
  bark() {
    return `${this.name} is barking`;
  }
}

const buddy = new Dog("buddy", 4);

console.log(buddy.bark()); // Output: buddy is barking

// Scenario: Dog adds a new method bark to the inherited methods.
// Use Case: Add specific functionality to a derived class while inheriting common functionality from the base class.



// 3. Overriding Base Class Methods (Overriding Methods in Child Class)
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

class Dog extends Animal {
  eat() {
    return `${this.name} is munching on a bone`;
  }
}

const max = new Dog("max", 5);

console.log(max.eat()); // Output: max is munching on a bone

// Scenario: Dog overrides the eat method to provide a specialized implementation.
// Use Case: Customize or extend the behavior of inherited methods to fit specific needs.



// 4. Calling Base Class Methods (*Using super to Access Base Class Methods)

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

class Dog extends Animal {
  eat() {
    // Call the parent class's eat method
    return `${super.eat()} and also loves dog food`;
  }
}

const rex = new Dog("rex", 2);

console.log(rex.eat()); // Output: rex is eating and also loves dog food

// Scenario: Dog extends the functionality of eat while still using the base class implementation.
// Use Case: Use super to call methods from the base class to build upon existing functionality.



// 5. Passing Arguments to the Base Class Constructor (Constructor Inheritance)
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); // Call the base class constructor
    this.breed = breed; // Additional property for Dog
  }
}

const bella = new Dog("bella", 3, "Labrador");

console.log(bella); // Output: Dog { name: 'bella', age: 3, breed: 'Labrador' }

// Scenario: Dog has an additional property breed and calls the base class constructor with super.
// Use Case: Extend the base class to include additional properties while ensuring base class initialization.



// 6. Understanding Prototype Chain (Inheritance and Prototype Chain)

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const fido = new Dog("fido");

console.log(fido instanceof Dog); // Output: true
// This checks if fido is an instance of Dog. The result is true because fido is indeed an instance of the Dog class.


console.log(fido instanceof Animal); // Output: true
// This checks if fido is an instance of Animal. The result is true because Dog extends Animal, so fido is also considered an instance of Animal.

console.log(fido.bark()); // Output: fido is barking
// This checks if fido has its own name property. Since name is a property set by the Animal constructor, and fido has it, the result is true.


console.log(fido.hasOwnProperty('name')); // Output: true
// This checks if fido has its own name property. Since name is a property set by the Animal constructor, and fido has it, the result is true.


console.log(fido.hasOwnProperty('bark')); // Output: false 
// This checks if fido has its own bark property. The bark method is defined in the Dog prototype, not directly on fido. Therefore, hasOwnProperty returns false.


// Scenario: Dog inherits methods and properties from Animal and adds its own methods.
// Use Case: Understanding the prototype chain helps in debugging and understanding how inheritance works.
