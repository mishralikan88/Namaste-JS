// new keyword

// __proto__
// official ecmascript document
// [[prototype]]

// constructor function
function CreateUser(firstName, lastName, email, age, address) {
  // 1. new takes care of below line
  ////const user = Object.create(createUser.prototype);
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}
CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.sing = function () {
  return "la la la la ";
};

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
// 2. new creates an empty object {},fills the parametered data into the object and returns the object
const user3 = new CreateUser(
  "mohit",
  "vashsitha",
  "harshit@gmail.com",
  17,
  "my address"
);
console.log(user1); // __proto__ => [[prototype]]
console.log(user1.is18());
