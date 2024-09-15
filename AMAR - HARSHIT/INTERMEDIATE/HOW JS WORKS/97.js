// In JavaScript, every execution context has a Lexical Environment, which is a structure that stores variable references during the execution of the code. The Lexical Environment consists of two parts:

// Environment Record: It holds local variables and functions within the current execution context.
// Outer Lexical Environment Reference: A reference to the lexical environment of the parent (where the function was defined).
// Each function carries the scope chain with it, allowing access to variables from its own scope and all parent scopes (outer environments) in a hierarchical manner.



const lastName = "Vashistha";

const printName = function () {
    const firstName = "harshit";
    function myFunction() {
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}

printName();



// 1. Global Execution Context (GEC):
// Lexical Environment of the Global Execution Context:
// The global scope contains:
// lastName: "Vashistha"
// printName: A reference to the printName function.
// Scope Chain: Since this is the top-level environment, its scope chain is simply the global environment.



// 2. Function Execution Context (FEC) for printName:
// When printName() is called, a new Function Execution Context is created for printName. Inside this context:
// Lexical Environment of printName:
// It contains:
// firstName: "harshit"
// myFunction: A reference to the myFunction function.
// Outer Lexical Environment Reference:
// The parent lexical environment is the Global Lexical Environment (GEC). This means that the printName function has access to variables in the global scope, including lastName.
// Scope Chain: The scope chain here includes:
// Local scope of printName (where firstName and myFunction are present).
// Outer scope (global scope where lastName is defined).



// 3. Function Execution Context (FEC) for myFunction:
// When myFunction() is called inside printName, a new Function Execution Context is created for myFunction. Inside this context:
// Lexical Environment of myFunction:
// It contains no local variables (in this case).
// Outer Lexical Environment Reference:
// The parent lexical environment is the Lexical Environment of printName. This means myFunction has access to variables defined in printName (like firstName) and the global scope (like lastName).
// Scope Chain: The scope chain here includes:
// Local scope of myFunction (which has no variables in this case).
// Outer scope (printName scope, where firstName is defined).
// Global scope (where lastName is defined).



// Key Points on Lexical Environment and Scope Chain:
// When myFunction() executes:
// It tries to access firstName. Since firstName is not defined in its own scope (local), it looks to its Outer Lexical Environment, which is printName's scope, and finds firstName: "harshit".
// It tries to access lastName. It first checks its own scope, doesn’t find it, then moves up the scope chain to printName's scope. Since printName's scope doesn’t have lastName either, it looks in the Global Lexical Environment, where lastName is found ("Vashistha").
// Lexical Scoping:
// Functions are lexically scoped, meaning they remember the environment in which they were created. This is why myFunction can access variables from printName and from the global scope.
// Scope Chain:
// When a variable is not found in the local scope, JavaScript checks the outer scopes, going up the scope chain until it either finds the variable or reaches the global scope.



// Final Output:
// console.log(firstName) prints "harshit" (found in the printName scope).
// console.log(lastName) prints "Vashistha" (found in the global scope, as it’s not in printName).
// This is how lexical scoping and the scope chain work together to resolve variables in JavaScript.