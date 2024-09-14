// JavaScript Functions as Objects & Prototypes

// JavaScript Functions are Objects:

// In JavaScript, a function is not just a function, it also behaves like an object.

// Functions have properties and methods just like objects.

function hello() {
  console.log("hello world");
}

// name Property:

// Functions have a name property that stores the function's name.

console.log(hello.name); // Output: "hello"


// Adding Custom Properties to Functions:

// You can add custom properties to functions just like you would with regular objects.

hello.myOwnProperty = "very unique value";

console.log(hello.myOwnProperty); // Output: "very unique value"


// Functions Provide Prototype Property.

// When a function is defined, it automatically gets a prototype property, which is an empty object {} by default.


console.log(hello.prototype); // Output: {}

// Only Functions Have prototype.

// The prototype property is specific to functions, not regular objects.

// Adding Properties and Methods to prototype:

// You can add properties and methods to a function’s prototype, which can later be accessed by objects created from this function.

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function () {
  return "lalalla";
};

// Accessing prototype Properties and Methods:

// The properties and methods added to the prototype can be accessed directly from the prototype object or from instances (if used as a constructor).

console.log(hello.prototype); // Output: {abc: 'abc', xyz: 'xyz', sing: ƒ}
console.log(hello.prototype.sing()); // Output: "lalalla"

// Key Points

// Functions in JavaScript behave like objects and have their own properties, such as name and prototype.
// The prototype property is a unique object attached to functions, used for inheritance.
// Custom properties and methods can be added to the prototype of a function, and these can be accessed via the function or instances created from the function.


// When you create an object using a constructor function, JavaScript links that object to the constructor's prototype object. This means that any properties or methods attached to the prototype of the constructor can be accessed by the objects created from it.

// Example 1: Basic Constructor Function and Prototype (discussed later)

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding methods to the prototype
Person.prototype.sayHello = function () {
  return `Hello, my name is ${this.name}`;
};

// Adding properties to the prototype
Person.prototype.species = "Homo sapiens";

// Creating instances using the Person constructor
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Accessing prototype methods and properties
console.log(person1.sayHello()); // Output: "Hello, my name is Alice"
console.log(person2.sayHello()); // Output: "Hello, my name is Bob"

console.log(person1.species); // Output: "Homo sapiens"
console.log(person2.species); // Output: "Homo sapiens"
Breakdown:
// Constructor Function:
// Person is a constructor function. It creates objects with name and age properties.

// Prototype:
// Person.prototype is an object where you can define properties and methods that all instances of Person will share.
// Here, we add a method sayHello and a property species to the prototype.

// Instances:
// person1 and person2 are objects created using the Person constructor.

// They don't have their own sayHello method or species property directly on the object, but they can still access them through the prototype chain.

// This shows how inheritance works: each instance shares the same sayHello method and species property from the prototype.

// Example 2: Memory Efficiency with Prototype (discussed later)
// Without using the prototype, each instance would have its own copy of the method, leading to inefficient memory usage


function Person(name, age) {
  this.name = name;
  this.age = age;

  // Without prototype, sayHello is created for each instance separately
  this.sayHello = function () {
    return `Hello, my name is ${this.name}`;
  };
}

// const person1 = new Person("Alice", 25);
// const person2 = new Person("Bob", 30);

console.log(person1.sayHello()); // Output: "Hello, my name is Alice"
console.log(person2.sayHello()); // Output: "Hello, my name is Bob"

Problems:
// Every time you create a new Person, the sayHello function is recreated, leading to unnecessary memory consumption for large numbers of objects.
// Solution:
// By using the prototype, sayHello is only created once and shared by all instances:


Person.prototype.sayHello = function () {
  return `Hello, my name is ${this.name}`;
};

// Now, all instances of Person share the same sayHello function, improving memory efficiency.


// Example 3: Prototype Chain (discussed later)

// When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it's not found, JavaScript then checks the object's __proto__, which points to the constructor’s prototype. (discussed later)


console.log(person1.hasOwnProperty('species')); // Output: false

// species is not directly on person1, but it's found on the Person.prototype.
// JavaScript looks up the prototype chain to find it.



// Conclusion-

// The prototype property is crucial for inheritance in JavaScript.
// It allows all instances created from a constructor function to share common properties and methods, improving memory efficiency.
// By defining methods and properties on the prototype, they can be inherited by all instances without duplicating them for each object.