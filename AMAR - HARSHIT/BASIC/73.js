// bind method - refer Akshay saini video session.

const user1 = {
  firstName: "harshit",
  age: 8,
};
const user2 = {
  firstName: "mohit",
  age: 9,
};

function about(hobby, favMusician) {
  console.log(this.firstName, this.age, hobby, favMusician);
}

const func = about.bind(user2, "guitar", "bach"); // call == bind but bind() returns a function to a funName that can be invoked later on.
func();

// ========================================================================================
// const user1 = {
//   firstName: "harshit",
//   age: 8,
//   about: function () {
//     console.log(this.firstName, this.age);
//   },
// };

// const user2 = {
//   firstName: "mohit",
//   age: 9,
// };

// // user2 borrowing user1 method.
// // user2 cant use user1 method directly.
// // user1 has to call the methodName 1st.
// // then pass user2 object to user1.methodName.call(user2).
// // Now user2  can use user1 method.
// user1.about.call(user2, "arguments list to about function separated by comma"); // in absense of user2 undefined undefined will be printed.
// user1.about.apply(
//   user2,
//   "arguments list to about function separated by comma with in the array"
// ); // in absense of user2 undefined undefined will be printed.
