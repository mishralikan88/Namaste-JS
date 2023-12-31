// 2015 / es6

// OOP
// class is a  blueprint to create object.
// classes are fake , Explain ?

class CreateUser {
  // constructors are used to initialise objects. When an object is created constructor is called.
  constructor(firstName, lastName, email, age, address) {
    // Initialising object properties.
    this.firstName = firstName; // this => current instance/object
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  // instance methods
  about() {
    return `${this.firstName} is ${this.age} years old.`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "la la la la ";
  }
}
// object creation.With the help of new we allocate memory for the object.

const user1 = new CreateUser( // user1 is reference to created object by new CreateUser("harshit", "vashsith","harshit@gmail.com",18, "my address");
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
// console.log(Object.getPrototypeOf(user1)); => methods are added on CreateUser prototype
