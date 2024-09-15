// Function Execution Context 

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName) {
    console.log(arguments);
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("harshit", "sharma");
console.log(personName);


// Code execution flow with respect to the execution context


// 1. Global Execution Context (GEC)


// A. Memory Creation Phase (Global):
// In this phase, memory is allocated to all the variables and functions before any code is executed.
// The variables are assigned undefined, and function declarations are stored with their definitions in memory.
// Memory creation in the global execution context looks like this:
// foo: undefined
// getFullName: function reference (function is fully stored in memory)
// personName: undefined
// Now the global context has memory for variables and functions but no values assigned yet.
// B. Execution Phase (Global):
// JavaScript begins executing the code line by line.
// let foo = "foo";
// foo is now assigned the value "foo".
// console.log(foo); prints "foo" to the console.
// function getFullName(firstName, lastName)
// The function declaration is already in memory from the creation phase, so nothing happens here except moving to the next line of code.
// const personName = getFullName("harshit", "sharma");
// A function call is made, so a Function Execution Context (FEC) is created for the getFullName function.
// Control moves to the Function Execution Context (explained below).


// 2. Function Execution Context (FEC)


// When getFullName("harshit", "sharma") is called, a new execution context is created for the getFullName function. Each function call has its own execution context, which is similar to the global context but specific to that function.
// A. Memory Creation Phase (Function):
// During this phase, memory is allocated for function parameters, local variables, and the special arguments object (which contains the arguments passed to the function).
// arguments: { 0: "harshit", 1: "sharma" }
// firstName: "harshit"
// lastName: "sharma"
// myVar: undefined
// fullName: undefined
// B. Execution Phase (Function):
// Now, the function begins executing line by line:
// console.log(arguments);
// The arguments object is printed: { 0: "harshit", 1: "sharma" }.
// let myVar = "var inside func";
// The variable myVar is assigned the value "var inside func".
// console.log(myVar); prints "var inside func" to the console.
// const fullName = firstName + " " + lastName;
// The fullName variable is computed as "harshit sharma", combining firstName and lastName.
// return fullName;
// The function returns the value "harshit sharma" and exits the function execution context.


// 3. Returning to the Global Execution Context:

// After the getFullName function returns "harshit sharma", the control returns to the global execution context.
// personName = "harshit sharma";
// The global variable personName is now assigned the value returned by the function.
// console.log(personName); prints "harshit sharma" to the console.



// ===============

// Call Stack Flow:

// Initial State:
// The Global Execution Context (GEC) is created and pushed onto the stack.
// Stack: [GEC]

// Function Call (getFullName):
// When getFullName is invoked, the Function Execution Context (FEC) for getFullName is pushed onto the stack.
// Stack: [GEC, FEC(getFullName)]

// Function Execution:
// The getFullName function completes, and its context is popped off the stack.
// makefile
// Stack: [GEC]

// Global Execution Finishes:
// Once the global code is fully executed, the Global Execution Context is popped off, and the stack becomes empty.
// Stack: []