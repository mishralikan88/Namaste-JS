// objects - reference type
// arrays are good but not sufficient for storing real world data.
// objects store data in key value pairs
// objects don't have index

// How to create objects ?

// 1. Object Literal
// The most common and simplest way to create an object is using the object literal notation {}.

// const person = {
//   firstName: "John",     // <key1> : <value1>
//   lastName: "Doe",       // <key2> : <value2>
//   age: 30,               // <key3> : <value3>
//   greet: function () {   // <key4> : <value4>
//     console.log("Hello, " + this.firstName); // this -> current context i.e. person
//   }
// };

// console.log(person.firstName);  // Output: "John"
// person.greet();                 // Output: "Hello, John"

// 2. Using new Object()
// This is an older method that uses the Object constructor.

const person = new Object();
console.log(person) // {}

// other ways - search in chat gpt

// Adding properties to person object

person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
person.greet = function () {
  console.log("Hello, " + this.firstName); // this points to person object
};

console.log(person.firstName); // Output: "John"
person.greet();                // Output: "Hello, John"


// const person = {
//   name: "harshit",
//   age: 22,
//   hobbies: ["guitar", "sleeping", "listening music"],
// };
// console.log(person);

// How to access data from objects ?

// 1. Dot Notation
// This is the most common and straightforward way to access object properties.


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// };

// console.log(person.firstName);  // Output: "John"
// console.log(person.age);        // Output: 30


// 2. Bracket Notation
// This is another way to access properties, especially useful when
// The property name contains spaces or special characters.
// The property name is stored in a variable.
// The property name is dynamic(calculated at runtime).

// const person = {
//   "first name": "John", // If the key contains space then that should be  wrapped inside ""
//   age: 30
// };

// Accessing using a string key
// console.log(person["first name"]);  // Output: "John"

// Accessing a property dynamically
// const key = "age";
// console.log(person[key]);  // Output: 30

// Key Differences:
// Dot notation is simpler and cleaner but can only be used with property names that are valid identifiers (i.e., no spaces, special characters, etc.).
// Bracket notation is more flexible and allows accessing properties using variables or dynamic expressions.


// Example: Using Both Notations

const person = {
  firstName: "John",
  lastName: "Doe",
  "job title": "Developer"
};

// Dot notation
console.log(person.firstName);   // Output: "John"

// Bracket notation (with space in property name)
console.log(person["job title"]);  // Output: "Developer"

// Bracket notation with dynamic key
const key = "lastName";
console.log(person[key]);  // Output: "Doe"


// Modifying Object Properties
// You can also use dot or bracket notation to modify the properties of an object.


person.firstName = "Jane";     // Modifying using dot notation
person["age"] = 31;            // Modifying using bracket notation

console.log(person.firstName); // Output: "Jane"
console.log(person.age);       // Output: 31

// Checking for a Property in an Object
// You can check if an object has a specific property using:
// in operator
// hasOwnProperty()

console.log("age" in person);               // Output: true // syntax - prop/key in object
console.log(person.hasOwnProperty("age"));  // Output: true // syntax - object.hasOwnProperty(<key/prop>)

// How to add key value pair to objects ?

// In JavaScript, you can add a key-value pair to an object in two main ways 
// dot notation and bracket notation. 
// Both methods can be used to dynamically add new properties to an existing object.

// 1. Dot Notation
// If the key (property name) is a valid identifier (no spaces, special characters, etc.), you can use dot notation.


// const person = {
//     firstName: "John",
//     lastName: "Doe"
// };

// // Add a new key-value pair
// person.age = 30;
// console.log(person); // Output: { firstName: "John", lastName: "Doe", age: 30 }

// 2. Bracket Notation
// If the key contains spaces, special characters, or is stored in a variable, you must use bracket notation.


const person = {
  firstName: "John",
  lastName: "Doe"
};

// Add a key with spaces
person["job title"] = "Developer";
console.log(person); // Output: { firstName: "John", lastName: "Doe", "job title": "Developer" }

// Bracket Notation with Variables
// You can also dynamically add properties using variables as keys with bracket notation.


// const person = {
//     firstName: "John",
//     lastName: "Doe"
// };

// const key = "age";
// person[key] = 30;

// console.log(person); // Output: { firstName: "John", lastName: "Doe", age: 30 }

// Example: Using Both Methods

const car = {
  make: "Toyota",
  model: "Corolla"
};

// Adding key-value pairs using dot notation
car.year = 2020;

// Adding key-value pairs using bracket notation
car["color"] = "blue";

console.log(car);
// Output: { make: "Toyota", model: "Corolla", year: 2020, color: "blue" }

// Summary:
// Use dot notation for simple keys without spaces or special characters.
// Use bracket notation for keys that are dynamic, have spaces, or special characters.