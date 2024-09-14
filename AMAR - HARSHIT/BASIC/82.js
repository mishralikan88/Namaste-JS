// JavaScript Prototype Inheritance with Constructor Function

// Creating Users with Prototypal Inheritance -

// Constructor Function with prototype -

// Instead of creating separate methods or functions like userMethods and linking it to objects, here we are attaching the methods directly to the createUser function’s prototype.

// Objects created by createUser will inherit these methods and properties via the prototype chain.

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype); // Establishes prototype inheritance.
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}

// Adding Methods to createUser.prototype:
// The createUser.prototype object is where we define the shared methods for all user objects.
// These methods will not be recreated for each instance, ensuring memory efficiency.

createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};

createUser.prototype.is18 = function () {
  return this.age >= 18;
};

createUser.prototype.sing = function () {
  return "la la la la";
};

// How the Code Works:
// Creating Users:
// Each time createUser is called, it creates a new user object and assigns the properties (firstName, lastName, etc.).
// The methods like about, is18, and sing are inherited from createUser.prototype by each user object through prototypal inheritance.

const user1 = createUser("harshit", "vashsith", "harshit@gmail.com", 18, "my address");
const user2 = createUser("harsh", "vashsith", "harshit@gmail.com", 19, "my address");
const user3 = createUser("mohit", "vashsitha", "harshit@gmail.com", 17, "my address");

// Prototype and __proto__ Chain: 
// Each user object created with createUser has a hidden property __proto__, which references createUser.prototype. This forms a prototype chain.
// When accessing methods like is18 or about on user1, JavaScript first checks if they exist on the user object itself. If not, it looks up the prototype chain (i.e., it checks user.__proto__, which is createUser.prototype).

console.log(user1.is18()); // Output: true (since user1.age is 18)
console.log(user2.about()); // Output: "harsh is 19 years old."

// Summary-

// Prototype is simply an object associated with functions in JavaScript, allowing methods and properties to be shared across instances.
// __proto__ is a reference that links an object to its prototype, forming a chain where methods and properties can be accessed if they’re not directly on the object.
// By using the prototype, we ensure that methods like about, is18, and sing are shared among all user objects, which is more efficient than duplicating them for each instance.









Ch