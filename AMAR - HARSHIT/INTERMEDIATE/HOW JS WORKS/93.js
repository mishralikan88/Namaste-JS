// Hoisting in JavaScript

// Hoisting is a behavior in which variable and function declarations are moved to the top of their containing scope during the creation phase of the execution context. 

// 1. Function Hoisting

// Function Declaration Hoisting:

// When you declare a function using a function declaration, the entire function definition is hoisted to the top of its scope. This means you can call the function before its declaration in the code.


console.log(myFunction); // Output: f{...}

function myFunction() {
    console.log("this is my function");
}

myFunction(); // Output: "this is my function"


// Explanation: The myFunction declaration is hoisted, so its definition is available throughout the entire scope. The initial console.log(myFunction) outputs the function definition.


// Function Expression Hoisting:

// When you assign a function to a variable using a function expression, only the variable declaration is hoisted, not the function definition. The function definition remains where you wrote it in the code.


console.log(myFunction); // Output: undefined

var myFunction = function() {
    console.log("this is my function");
}

myFunction(); // Output: "this is my function"


// Explanation: The variable myFunction is hoisted and initialized with undefined during the creation phase. The actual function definition is not hoisted, so calling myFunction before its definition results in an error. After the assignment, myFunction refers to the function as expected.


// 2. Variable Hoisting

// var Declarations:
// Variables declared with var are hoisted. The declaration is hoisted to the top of the scope, but the initialization stays where it is. This means the variable is initially undefined until the execution phase reaches the initialization.


console.log(firstName); // Output: undefined

var firstName = "Harshit";
console.log(firstName); // Output: "Harshit"


// Explanation: During the creation phase, firstName is declared and initialized with undefined. The assignment var firstName = "Harshit" occurs during the execution phase, so firstName gets the value "Harshit".


// let and const Declarations:

// Variables declared with let and const are also hoisted but are not initialized. They remain in a "temporal dead zone" from the start of the block until their declaration is encountered. Accessing them before their declaration results in a ReferenceError.


console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization

let myVar = "example";

// Explanation: let and const are hoisted, but they do not have a value assigned until their declaration is executed. Accessing them before this results in a ReferenceError.


// 3. Arrow Functions

// Arrow functions are not hoisted. They are treated as function expressions and must be defined before they are used.


console.log(myArrowFunction); // Output: undefined

var myArrowFunction = () => {
    console.log("this is an arrow function");
}

myArrowFunction(); // Output: "this is an arrow function"


// Explanation: Similar to regular function expressions, the var myArrowFunction declaration is hoisted but initialized with undefined. The arrow function assignment happens during the execution phase.



// Execution Context

// JavaScript code execution occurs in different contexts:

// Global Execution Context: This is the default context in which your code runs. It is created when the script starts. In the global execution context:

// Variable and function declarations are hoisted.
// The this keyword refers to the global object (window in a browser).
// Function Execution Context: Created whenever a function is called. Each function execution creates a new execution context with its own local scope. It includes:
// Variable Object (VO): Contains all the variables and functions declared within the function.
// Scope Chain: Links to parent scopes to resolve variable references.
// this Binding: Refers to the object from which the function was called.


// Execution Flow Example

console.log(this); // window
console.log(window); // window
console.log(myFunction); // [Function: myFunction]
console.log(fullName); // undefined

function myFunction() {
    console.log("this is my function");
}

var firstName = "Harshit";
var lastName = "Sharma";
var fullName = firstName + " " + lastName;
console.log(fullName); // "Harshit Sharma"




// Creation Phase:

// myFunction is hoisted and available throughout the scope.
// fullName is declared and initialized with undefined.
// firstName and lastName are declared and initialized with undefined.

// Execution Phase:

// myFunction is defined as function() { console.log("this is my function"); }.
// fullName is computed as "Harshit Sharma", based on the initialized values of firstName and lastName.


// Function Expression Example

console.log(myFunction); // undefined

var myFunction = function() {
    console.log("this is my function");
}

console.log(myFunction); // [Function: myFunction]


// Creation Phase:

// myFunction is declared and initialized with undefined.

// Execution Phase:

// myFunction is assigned the function function() { console.log("this is my function"); }.


// Summary of Hoisting Scenarios
// Function Declarations: Entire function is hoisted.
// Function Expressions: Variable declaration is hoisted; function definition is not.
// Variables with var: Declaration is hoisted; initialization is not.
// Variables with let and const: Declaration is hoisted; initialization is not, resulting in a temporal dead zone.
// Arrow Functions: Not hoisted. treated like function expressions.