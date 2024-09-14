// How JavaScript Works ?

// JavaScript, like many programming languages, goes through a couple of key phases before the code is executed. These phases are:
// Compilation Phase: This is where JavaScript prepares the code for execution.
// Code Execution Phase: This is where the actual code is executed.

// 1. Compilation Phase -

// Tokenizing: The process of breaking down the code into smaller, meaningful units called tokens. Tokens are the basic building blocks of your code, such as keywords (var, console), operators (+, =), and identifiers (variable names).

// Parsing: The process of analyzing the sequence of tokens according to the language's syntax rules to generate an Abstract Syntax Tree (AST). The AST represents the structure of the code.

// Code Generation: This is where the JavaScript engine transforms the AST into executable code, typically in the form of bytecode.

// Why Compile?

// Early Error Checking: Compilation allows the engine to check for syntax errors and other issues before execution begins. For example, syntax errors like var firstName = ."Amar" are caught during the compilation phase.

// Determining Variable Scope: During parsing, JavaScript determines the scope of variables. This helps in resolving where variables are accessible and how they are managed.

// Example of Compilation

// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = "Amar";
// Before Execution: JavaScript engine parses the code to understand variable declarations, function declarations, and scopes.
// firstName is hoisted to the top of its scope and initialized with undefined.
// this and window are resolved based on the global context.


// 2. Code Execution Phase


// Global Execution Context: When JavaScript code is executed, it runs within a global execution context. The global execution context is created when the script starts running.

// Memory Creation/Allocation phase: Variables and functions are allocated memory. Variables are initialized with undefined, and functions are hoisted (i.e., their definitions are moved to the top).

// Memory allocation
// firstName -> undefined
// this -> window
// window -> window

// Code Execution Phase/ Thread of execution :

// In the code execution phase, JavaScript executes the code line by line:

console.log(this) // prints the window object (in a browser environment).
console.log(window) // prints the window object.
console.log(firstName) // prints undefined because firstName has been declared but not yet assigned a value.
var firstName = "Amar"; // assigns "Amar" to firstName.
console.log(firstName) // prints "Amar".

// Why JS is synchronous Single-Threaded?

// JavaScript is single-threaded, meaning it can execute only one operation at a time. This is because JavaScript is designed to run in the browser, where it needs to handle user interactions, network requests, and other tasks in a non-blocking manner. JavaScript uses an event loop to handle asynchronous operations and ensures that code execution remains synchronous in the main thread.

// Hoisting -

// Hoisting: JavaScript's behavior of moving declarations to the top of their containing scope during the creation phase. In the case of variables declared with var, only the declaration is hoisted, not the initialization.

console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Amar";
console.log(firstName);

// Explanation -

// console.log(this); → window (In a browser environment, this refers to the global object, which is window).
// console.log(window); → window.
// console.log(firstName); → undefined (due to hoisting; firstName is declared but not yet initialized).
// var firstName = "Amar"; → Initializes firstName to "Amar".
// console.log(firstName); → "Amar".

// This behavior demonstrates how hoisting works, and how the execution context processes the code line by line.