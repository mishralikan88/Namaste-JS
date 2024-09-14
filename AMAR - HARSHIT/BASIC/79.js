// const userMethods = {
//   about: function () {
//     return `${this.firstName} is ${this.age} years old.`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
//   sing: function () {
//     return "toon na na na la la ";
//   },
// };


// function createUser(firstName, lastName, email, age, address) {
//   const user = {}
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   user.about = userMethods.about
//   user.is18 = userMethods.is18
//   user.sing = userMethods.sing
//   return user;
// }

// const user1 = createUser(
//   "harshit",
//   "vashsith",
//   "harshit@gmail.com",
//   9,
//   "my address"
// );

// console.log(user1.sing())

// If there is a requirement to add methods, we can add them as needed, such as the sing method added here. However, adding numerous methods in this manner is not practical.

// Approach 5 - (using prototype chain)

const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return "toon na na na la la ";
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethods); // Refer 80.js
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
const user1 = createUser(
  "harshit",
  "vashsith",
  "harshit@gmail.com",
  9,
  "my address"
);

const user2 = createUser(
  "harsh",
  "vashsith",
  "harshit@gmail.com",
  19,
  "my address"
);

const user3 = createUser(
  "mohit",
  "vashsitha",
  "harshit@gmail.com",
  17,
  "my address"
);

console.log(user1);
console.log(user1.about());
console.log(user3.sing());