// closure

// A closure is a combination of a function and its lexical environment. When a function is defined inside another function and the inner function is returned, it remembers the variables from its outer function’s scope even after the outer function has finished executing. This is what forms a closure.

// Example code -

function printFullName(firstName, lastName) {
    function printName() {
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("harshit", "sharma");
ans();  // Output: "harshit sharma"

// Step-by-Step explanation:

// 1. Outer Function (printFullName)
// Definition: printFullName takes two arguments, firstName and lastName.
// Inside printFullName, a new function printName is defined, which logs firstName and lastName.
// Return: printFullName returns the printName function, but not just the function—it also returns the lexical environment that includes firstName and lastName.

// 2. Inner Function (printName):
// printName is defined inside printFullName. It has no local variables, but it remembers the variables from its outer function (firstName and lastName).
// Even after printFullName finishes executing, printName can still access firstName and lastName because it has closed over the variables from its parent scope (this is the closure).

// 3. When the outer function is called:
// const ans = printFullName("harshit", "sharma");
// This calls the printFullName function with "harshit" and "sharma" as arguments.
// printFullName finishes execution but returns the printName function, along with the lexical environment that contains firstName = "harshit" and lastName = "sharma".

// 4. Closure is formed:
// When you call ans(), you’re calling printName, which still has access to firstName and lastName (because it was "closed over" the outer function’s scope). That’s why ans() logs "harshit sharma".