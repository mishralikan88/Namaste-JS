// call , apply , bind

// call - Function Borrowing with call

// In JavaScript, you can borrow methods from one object & use them on another object. This technique is known as 'Function Borrowing'. You can achieve this using the call method, which allows you to explicitly set the value of this inside a function.


const user1 = {
  firstName: "Amar",
  age: 8,
  about: function () {
    console.log(this.firstName, this.age);
  }
};


const user2 = {
  firstName: "Mohit",
  age: 9
};


// user1 has a method about that logs this.firstName and this.age.

// user2 does not have an about method but has similar properties (firstName & age).


// Using Function Borrowing:

// Borrowing Method with call:

// To call the about method of user1 using the properties of user2, you can use the call method:


user1.about.call(user2); // Output: Mohit 9

// Explanation: user1.about.call(user2) borrows the about method from user1 and invokes it with this set to user2. As a result, this.firstName and this.age refer to user2's properties, so it logs Mohit 9.


// Calling with No Arguments:


user1.about.call(); // Output: undefined undefined


// Explanation: user1.about.call() invokes the about method with this set to undefined in strict mode (or the global object in non-strict mode). Since this is not set to any object, this.firstName and this.age are undefined.
// Calling with user1 as this:


user1.about.call(user1); // Output: Amar 8


// Explanation: user1.about.call(user1) calls the about method with this explicitly set to user1. The method logs user1's properties, resulting in Amar 8.


// Summary:
// Function Borrowing: Using call, you can borrow methods from one object and use them on another object by setting the this context.
// Behavior of call:
// user1.about.call(user2) sets this to user2.
// user1.about.call() sets this to undefined (or the global object in non-strict mode).
// user1.about.call(user1) sets this to user1.
// This flexibility allows you to reuse functions across different objects while controlling which object's context the function operates within.




// Passing Parameters with call and Accessing Them :

// In addition to setting the this context for a function, you can also pass parameters to the function using call. These parameters are provided after the first argument (which sets the this context).

// const user1 = {
//   firstName: "Amar",
//   age: 8,
//   about: function (hobby, location) {
//     console.log(`${this.firstName}, Age: ${this.age}, Hobby: ${hobby}, Location: ${location}`);
//   }
// };

// const user2 = {
//   firstName: "Mohit",
//   age: 9
// };

// user1 has a method about that takes two parameters, hobby and location, in addition to logging this.firstName and this.age.





// Using call to Pass Parameters:

// Call with Parameters:

// user1.about.call(user2, "Reading", "New York"); // Output: Mohit, Age: 9, Hobby: Reading, Location: New York


// Explanation: user1.about.call(user2, "Reading", "New York") borrows the about method from user1 and invokes it with this set to user2. Additionally, "Reading" and "New York" are passed as parameters to the about function.
// The method logs user2's properties along with the provided parameters.




// Call with Different Parameters:


// user1.about.call(user2, "Gaming", "Los Angeles"); // Output: Mohit, Age: 9, Hobby: Gaming, Location: Los Angeles

// Explanation: Here, user1.about.call(user2, "Gaming", "Los Angeles") sets this to user2 and provides different parameters ("Gaming" and "Los Angeles"). The function uses these parameters when logging.




// Calling with user1 & Parameters :

// user1.about.call(user1, "Cooking", "Delhi"); // Output: Amar, Age: 8, Hobby: Cooking, Location: Delhi

// Explanation: user1.about.call(user1, "Cooking", "Delhi") sets this to user1 and passes "Cooking" and "Delhi" as parameters. The method logs user1's properties and the provided parameters.




// Summary: Syntax: functionName.call(thisArg, arg1, arg2, ...)

// thisArg sets the this context for the function. arg1, arg2, ... are the additional arguments passed to the function.

// Usage: Use call to borrow methods and set the this context. Pass additional parameters after the this context to be used within the function.

// user1.about.call(user2, "Reading", "New York") borrows the about method from user1, sets this to user2, and passes "Reading" and "New York" as parameters.

// This technique provides flexibility in method borrowing and allows you to work with dynamic data by passing parameters.


// apply - Function Borrowing with apply


// The apply method in JavaScript is similar to call but differs in how it handles arguments. With apply, you pass an array (or array-like object) of arguments to the function instead of listing them individually.

// Here’s how you can use apply to achieve the same functionality as with call:

// const user1 = {
//   firstName: "Amar",
//   age: 8,
//   about: function (hobby, location) {
//     console.log(`${this.firstName}, Age: ${this.age}, Hobby: ${hobby}, Location: ${location}`);
//   }
// };

// const user2 = {
//   firstName: "Mohit",
//   age: 9
// };


// user1 has an about method that accepts two parameters: hobby and location.
// Using apply to Pass Parameters


// Applying with Parameters as an Array:

user1.about.apply(user2, ["Reading", "New York"]); // Output: Mohit, Age: 9, Hobby: Reading, Location: New York

// Explanation: user1.about.apply(user2, ["Reading", "New York"]) borrows the about method from user1 and sets this to user2. The parameters "Reading" and "New York" are provided as an array.

// The method logs user2's properties along with the provided parameters.


// Applying with Different Parameters:


user1.about.apply(user2, ["Gaming", "Los Angeles"]); // Output: Mohit, Age: 9, Hobby: Gaming, Location: Los Angeles

// Explanation: Here, user1.about.apply(user2, ["Gaming", "Los Angeles"]) sets this to user2 and provides different parameters as an array. The method uses these parameters when logging.


// Applying with user1 and Parameters:


user1.about.apply(user1, ["Cooking", "Delhi"]);
// Output: Amar, Age: 8, Hobby: Cooking, Location: Delhi
// Explanation: user1.about.apply(user1, ["Cooking", "Delhi"]) sets this to user1 and passes ["Cooking", "Delhi"] as an array of parameters. The method logs user1's properties and the provided parameters.



// Syntax: functionName.apply(thisArg, [arg1, arg2, ...])

// thisArg sets the this context for the function.
// [arg1, arg2, ...] is an array of arguments passed to the function.


// Usage: Use apply to borrow methods and set the this context.


// Pass parameters as an array.

// user1.about.apply(user2, ["Reading", "New York"]) borrows the about method from user1, sets this to user2, and passes "Reading" & "New York" as parameters in an array.

// The apply method is particularly useful when you have a dynamic number of parameters or when parameters are already available in array form.




// bind method

// The bind method in JavaScript is used to create a new function with a specific this context and, optionally, predefined arguments. Unlike call and apply, which invoke the function immediately, bind returns a new function that can be invoked later.

// How bind Works ?

// Syntax: functionName.bind(thisArg, arg1, arg2, ...)

// thisArg: The value to which this should be bound when the new function is called.
// arg1, arg2, ...: Optional arguments to pre-fill for the new function.



// const user1 = {
//   firstName: "Amar",
//   age: 8,
//   about: function (hobby, location) {
//     console.log(`${this.firstName}, Age: ${this.age}, Hobby: ${hobby}, Location: ${location}`);
//   }
// };

// const user2 = {
//   firstName: "Mohit",
//   age: 9
// };

// In this example, user1 has a method about that takes two parameters, hobby and location.

// Using bind to Create a New Function


// Binding this and Parameters:


// const user2About = user1.about.bind(user2, "Reading", "New York");
// user2About();
// Output: Mohit, Age: 9, Hobby: Reading, Location: New York

// Explanation: user1.about.bind(user2, "Reading", "New York") creates a new function user2About with this bound to user2 and hobby and location pre-filled with "Reading" and "New York", respectively. When user2About() is called, it uses these bound values.


// Binding this Only:

const user1About = user1.about.bind(user1);
user1About("Cooking", "Delhi"); // Output: Amar, Age: 8, Hobby: Cooking, Location: Delhi



// Explanation: user1.about.bind(user1) creates a new function user1About with this bound to user1. You can then pass parameters when calling user1About(). The this context inside user1About will always refer to user1.



// const user2About = user1.about.bind(user2);
// user2About("Gaming", "Los Angeles"); // Output: Mohit, Age: 9, Hobby: Gaming, Location: Los Angeles

// Explanation: In this example, user1.about.bind(user2) creates a new function with this bound to user2. Additional parameters are provided when calling user2About().



// Key Points >>

// Creates a New Function: bind does not execute the function immediately. It returns a new function that you can call later.
// Pre-sets this: The this context is set when the new function is created.
// Pre-fills Parameters: You can also pre-fill some parameters when creating the new function.


// Summary
// Syntax: functionName.bind(thisArg, arg1, arg2, ...)

// thisArg: Sets the this context for the new function.
// arg1, arg2, ...: Optional arguments to pre-fill for the new function.
// Usage: Create a new function with a fixed this context.Optionally, pre-fill some arguments.


const user2About = user1.about.bind(user2, "Reading", "New York");

// creates a new function where this is bound to user2, and "Reading" and "New York" are pre-filled parameters.
// The bind method is useful when you need a function with a fixed context and optionally pre-set arguments, which can be called later in your code.