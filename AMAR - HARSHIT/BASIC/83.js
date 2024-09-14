// Usage of new keyword


// Constructor function
function CreateUser(firstName, lastName, email, age, address) {
  // 1. `new` automatically creates a new empty object: {}
  // 2. It sets up the prototype inheritance by linking the new object's `__proto__` 
  //    to `CreateUser.prototype` (handled by `new`)
  // 3. `this` refers to the newly created object
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
  // 4. `new` returns this new object at the end
}

// Adding methods to the prototype
CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};

CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

CreateUser.prototype.sing = function () {
  return "la la la la";
};

// Using the `new` keyword to create a new object from the constructor function
const user1 = new CreateUser("harshit", "vashsith", "harshit@gmail.com", 18, "my address");

// Explanation of what `new` does here

// 1. Creates a new empty object: {}
// 2. Sets the prototype of this object to `CreateUser.prototype` so it can access the methods like `about`, `is18`.
// 3. Binds `this` inside the function to the new object, so `firstName`, `lastName`, etc. get assigned to the new object.
// 4. Returns the new object (which now has `firstName`, `lastName`, `email`, `age`, and `address` properties).

console.log(user1); // Outputs: the new user object with all properties
console.log(user1.is18()); // Calls the `is18` method from the prototype, outputs: true
console.log(user1.about()); // Calls the `about` method from the prototype, outputs: "harshit is 18 years old."

// You can create more users without copying methods into each one
const user2 = new CreateUser("mohit", "vashsith", "mohit@gmail.com", 20, "another address");
console.log(user2.about()); // Outputs: "mohit is 20 years old."
