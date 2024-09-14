
// Approach 1-

// const user = {
//   firstName: "Amar",
//   lastName: "Mishra",
//   email: "harshitvashisth@gmail.com",
//   age: 2,
//   address: "Lane Number 6 - Q Number 5 , Mahavirpada sambalpur odisha 768005",
//   about: function () {
//     return `${this.firstName} is ${this.age} years old`
//   },
//   is18: function () {
//     return this.age >= 18
//   }
// }

// const aboutUser = user.about()
// console.log(aboutUser)



// This approach works well for a single user, but what if we have many users?


// Approach 2 -

const user1 = {
  firstName: "Amar",
  lastName: "Mishra",
  email: "harshitvashisth@gmail.com",
  age: 2,
  address: "Lane Number 6 - Q Number 5 , Mahavirpada sambalpur odisha 768005",
  about: function () {
    return `${this.firstName} is ${this.age} years old`
  },
  is18: function () {
    return this.age >= 18
  }
}

const aboutUser1 = user1.about()
console.log(aboutUser1)

const user2 = {
  firstName: "Likan",
  lastName: "Mishra",
  email: "harshitvashisth@gmail.com",
  age: 2,
  address: "Lane Number 6 - Q Number 5 , Mahavirpada sambalpur odisha 768005",
  about: function () {
    return `${this.firstName} is ${this.age} years old`
  },
  is18: function () {
    return this.age >= 18
  }
}
const aboutUser2 = user2.about()
console.log(aboutUser2)

const user3 = {
  firstName: "Supriti",
  lastName: "Mishra",
  email: "harshitvashisth@gmail.com",
  age: 2,
  address: "Lane Number 6 - Q Number 5 , Mahavirpada sambalpur odisha 768005",
  about: function () {
    return `${this.firstName} is ${this.age} years old`
  },
  is18: function () {
    return this.age >= 18
  }
}
const aboutUser3 = user3.about()
console.log(aboutUser3)

// The current approach is tedious as more users are added

// Approach 3 - Creating a function that generates an object, adds key-value pairs, and returns the object.

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;

  user.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
  };

  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}


const user = createUser(
  "harshit",
  "vashsith",
  "harshit@gmail.com",
  19,
  "my address"
);

console.log(user);
const is18 = user.is18();
const about = user.about();
console.log(about);

// We have issues with this approach as well . Memory consumption for functions. 

// For a single object, the two functions each consume memory. For N objects, 2N memory spaces would be used for these two functions.

// Why is there a focus on functions consuming memory in this case?

// When you create multiple objects using the createUser function, each object gets its own copy of the properties and functions. This is the issue: for every object, separate copies of the functions about() and is18() are created and stored in memory.

// Properties (e.g., firstName, age) are instance-specific, meaning every user object needs its own unique values for these properties. So, it's expected that memory is allocated for these properties in each object because the data (e.g., different names or ages) varies across users.

// The logic inside these functions (e.g., about(), is18()): doesn't change from one user object to another. Each function performs the same task for any user (checking age, or returning a string), meaning it's inefficient to create a new copy of the same function for every user object.

// Since the functions do the same thing for all objects, it would be better to share one version of the function across all user objects rather than creating multiple copies.


// Approach 4 - Optimizing memory usage for functions (refer 78.js)

