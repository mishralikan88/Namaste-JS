console.log("hello world");
let firstName = "Harshit";
let lastName = "Vashistha";

const myFunction = function () {
    let var1 = "First Variable";
    let var2 = "second Variable";
    console.log(var1);
    console.log(var2);
}


// Explanation -

// 1. Global Execution Context
// When the script runs, JavaScript creates a global execution context. This involves setting up the environment where your code executes, including hoisting and initialization.

// Global Context Setup:
// console.log("hello world");: This line prints "hello world" to the console. It executes immediately as it’s the first line of code in the global scope.

// let firstName = "Harshit";: Declares a variable firstName and initializes it with the value "Harshit". This variable is hoisted, but it is not initialized until this line is executed. Before this line, accessing firstName would result in a ReferenceError.

// let lastName = "Vashistha";: Declares a variable lastName and initializes it with "Vashistha". Similar to firstName, it is hoisted but not accessible before its declaration.

// 2. Function Declaration with const
// const myFunction = function() { ... }:

// Declaration: myFunction is declared as a constant variable and is assigned a function. The declaration of myFunction is hoisted, but the function definition is not accessible until the line where myFunction is assigned.

// Hoisting: Only the declaration of myFunction is hoisted, not its value. Trying to use myFunction before its assignment would result in an error.

// 3. Function Execution
// Function Definition: The function myFunction is defined with two local variables, var1 and var2. Inside this function:
// Local Scope: var1 and var2 are local to the function. They are only accessible within myFunction.
// console.log(var1);: Prints the value of var1 which is "First Variable".
// console.log(var2);: Prints the value of var2 which is "second Variable".


// Detailed Explanation

// console.log("hello world"); runs first, printing "hello world".
// let firstName = "Harshit"; sets up the firstName variable.
// let lastName = "Vashistha"; sets up the lastName variable.
// const myFunction is declared but not yet defined. It holds a function, but calling myFunction before its definition line would throw an error.

// Function Scope:
// When myFunction is called (though it’s not called in this snippet), it would execute the following:
// let var1 = "First Variable"; initializes var1 with "First Variable".
// let var2 = "second Variable"; initializes var2 with "second Variable".
// console.log(var1); prints "First Variable".
// console.log(var2); prints "second Variable".