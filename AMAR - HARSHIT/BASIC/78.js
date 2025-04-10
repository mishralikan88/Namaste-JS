
// Approach 4 - Optimizing memory usage for functions

const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;

  // Storing a reference to the about method from userMethods instead of copying the whole function. 
  // This improves memory efficiency since the function is created once in the heap and shared across objects.
  user.about = userMethods.about;
  user.is18 = userMethods.is18;   // Storing a reference to the is18 method.
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

console.log(user1.about());
console.log(user3.about());