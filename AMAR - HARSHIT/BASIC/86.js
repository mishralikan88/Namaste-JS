// 2015 / ES6 introduced `class` syntax for object-oriented programming (OOP) in JavaScript.
// OOP concepts like inheritance, encapsulation, and abstraction can be implemented using classes.
// Class is a blueprint to create objects. However, classes in JavaScript are "syntactic sugar" over the 
// existing prototype-based inheritance. This is why it's said that "classes are fake" — behind the scenes, 
// JavaScript still uses prototype-based inheritance.

class CreateUser {
  // Constructor is a special method that initializes the object's properties.
  // It is automatically called when a new object is created.
  constructor(firstName, lastName, email, age, address) {
    // `this` refers to the current instance (the newly created object).
    this.firstName = firstName; // e.g., "harshit"
    this.lastName = lastName;   // e.g., "vashsith"
    this.email = email;         // e.g., "harshit@gmail.com"
    this.age = age;             // e.g., 18
    this.address = address;     // e.g., "my address"
  }

  // Instance methods are methods that are available to all instances (objects) created by this class.
  // These methods are added to the class's prototype under the hood.
  
  // Method to describe the user. Dont use function keyword.
  about() {
    return `${this.firstName} is ${this.age} years old.`;
  }

  // Method to check if the user is 18 or older
  is18() {
    return this.age >= 18;
  }

  // Method to simulate singing
  sing() {
    return "la la la la ";
  }
}

// Object creation: With the help of `new`, we allocate memory for the object and call the constructor.
// `new` keyword creates a new object, sets `this` to the new object, and links it to the class's prototype. 
const user1 = new CreateUser(
  "harshit",  // firstName
  "vashsith", // lastName
  "harshit@gmail.com", // email
  18,         // age
  "my address" // address
);

const user2 = new CreateUser(
  "harsh", 
  "vashsith", 
  "harshit@gmail.com", 
  19, 
  "my address"
);

const user3 = new CreateUser(
  "mohit", 
  "vashsitha", 
  "harshit@gmail.com", 
  17, 
  "my address"
);

// Classes are just syntactic sugar for functions and prototypes.

// If we inspect the prototype of user1, we'll see that the methods are on CreateUser's prototype.
console.log(Object.getPrototypeOf(user1)); 
// Output: {about: ƒ, is18: ƒ, sing: ƒ, constructor: ƒ}

// Looping through all keys in user1 (including the ones from its prototype):
for (let key in user1) {
  // `key` will include both own properties and prototype methods.

  // Checking if the key is an own property of the object (and not inherited from the prototype):
  if (user1.hasOwnProperty(key)) {
    console.log(key); 
    // Output: firstName, lastName, email, age, address (only the properties, not the methods)
  }
}

// Why "classes are fake": 
// Even though we use the `class` keyword, under the hood JavaScript is still using prototype-based inheritance.
// `about`, `is18`, and `sing` methods are not copied to each object instance. Instead, they are part of the prototype,
// which all instances share, making it memory efficient.