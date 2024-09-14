// var, let, and const


// var:
// Hoisted: Yes, the declaration is moved to the top, and the variable is set to undefined until it’s assigned a value.
console.log(x); // undefined
var x = 10;
console.log(x); // 10

// let and const:
// Hoisted: Yes, but in a special way. They are moved to the top of their block, but they stay in a “temporal dead zone” until the code reaches their declaration.
// Temporal Dead Zone: During this period, trying to use these variables will cause an error.
console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization

let a = 5;

// How It Works?
// Global Execution Context:
// When your script starts, JavaScript creates a global execution context. This is where all your variables and functions are set up.
// let and const declarations are hoisted but not initialized. They remain in the temporal dead zone until their actual declaration line is executed.

// Code Execution:
// Before Declaration: Accessing variables declared with let or const before their actual declaration in the code will result in an error.
// After Declaration: Once the code reaches the line where let or const is declared, you can use these variables as usual.


// Examples

// Example 1: Temporal Dead Zone
console.log(firstName); // Uncaught ReferenceError: Cannot access 'firstName' before initialization
let firstName = "John";
// Explanation: firstName is hoisted but not initialized. Trying to access it before its declaration line causes a ReferenceError.


// Example 2: Access After Declaration
let lastName;
console.log(lastName); // undefined
lastName = "Doe";
console.log(lastName); // "Doe"
// Explanation: Before lastName is initialized, it is undefined. After assignment, it shows "Doe".


// conclusion

// var: Declarations are hoisted and initialized with undefined.
// let and const: Declarations are hoisted, but they stay in the temporal dead zone. They can’t be used before the actual line where they are declared.