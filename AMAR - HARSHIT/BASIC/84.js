// Constructor function to create a new user object with the provided properties
function CreateUser(firstName, lastName, email, age, address) {
  // `this` refers to the new object being created when `new` is used
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}

// Adding methods to the prototype so that all objects created by CreateUser can access these methods
CreateUser.prototype.about = function () {
  // `this` refers to the individual object that calls the method
  return `${this.firstName} is ${this.age} years old.`;
};

CreateUser.prototype.is18 = function () {
  // Check if the user's age is 18 or older
  return this.age >= 18;
};

CreateUser.prototype.sing = function () {
  return "la la la la ";
};

// Creating three user objects using the `new` keyword and the CreateUser constructor function
const user1 = new CreateUser(
  "harshit",
  "vashsith",
  "harshit@gmail.com",
  18,
  "my address"
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

// Looping through all keys (properties and methods) in user1

for (let key in user1) {

  // `key` will be a property of the object or something from the prototype chain
  // If we console.log(key) directly here, it will print both the object's own properties
  // and the properties inherited from the prototype (like 'about', 'is18', etc.)
  // console.log(key); // Uncomment this line to see both the object's properties and prototype methods
  // `hasOwnProperty` checks if the property belongs to the object itself (& not from the prototype)

  if (user1.hasOwnProperty(key)) {
    console.log(key); // Only logs the object's own properties (firstName, lastName, email, age, address)
  }
}
