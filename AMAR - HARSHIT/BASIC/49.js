// Lexical scope  -> Refer Akshaya saini Videos

const myVar = "value1"; // Script Scope

function myApp() {
    function myFunc() {
        // const myVar = "value59"; // Local Scope
        const myFunc2 = () => {
            console.log("inside myFunc", myVar); // myVar -> Lexical Scope . If local scoped 'myVar' is commented, parent 'myVar' is accessed.
        }
        myFunc2();
    }

    console.log(myVar);
    myFunc();
}

myApp();



// Lexical scope (also known as static scope) in JavaScript refers to the fact that the scope of a variable is determined by its position in the source code, and this scope is defined at compile-time, not at runtime. This means that how variables are resolved depends on where the function is declared, not where it is called.

// Key Points of Lexical Scope:

// Scope Hierarchy: JavaScript functions create a scope chain based on where they are defined. Inner functions can access variables from their own scope and from outer (or parent) scopes.

// Static Scoping: Once the scope is established when the code is written, it doesn't change based on how or where the function is invoked. The scope of variables is always based on where functions and blocks are nested in the source code.

// Closures: Lexical scoping allows functions to "remember" the environment in which they were created. This is the foundation of closures.

// How Lexical Scope Works ?

// Global Scope: Variables defined outside any function or block are in the global scope and can be accessed anywhere in the code.
// Local/Function Scope: Variables declared within a function are in that function's local scope and can only be accessed within the function or nested functions.

// Nested Scope: A function can access variables from its own scope as well as from any outer scopes (the scope in which it was defined).

// Example of Lexical Scope:

let globalVar = "I'm global";

function outerFunction() {
    let outerVar = "I'm in the outer function";

    function innerFunction() {
        let innerVar = "I'm in the inner function";

        console.log(globalVar);  // Output: "I'm global"
        console.log(outerVar);   // Output: "I'm in the outer function"
        console.log(innerVar);   // Output: "I'm in the inner function"
    }

    innerFunction();
}

outerFunction();

// Explanation:
// innerFunction is nested inside outerFunction.
// When innerFunction is called, it can access variables from its own scope (innerVar), its parent function’s scope (outerVar), and the global scope (globalVar).
// However, variables defined inside innerFunction (like innerVar) cannot be accessed from outerFunction or the global scope.


// Example: Lexical Scope with Closures

// Lexical scoping also enables closures, where a function "remembers" variables from its outer scope even after that outer scope has returned.


function outerFunction() {
    let outerVar = "I'm still accessible";

    return function innerFunction() {
        console.log(outerVar);  // Output: "I'm still accessible"
    };
}

const closureFunc = outerFunction();
closureFunc();  // Even though outerFunction has returned, innerFunction retains access to outerVar


// Here, innerFunction forms a closure over the variable outerVar. Even after outerFunction has finished executing, the returned function (innerFunction) still has access to outerVar because of lexical scoping.