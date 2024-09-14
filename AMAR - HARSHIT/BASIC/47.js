// Hoisting -> Refer Akshaya saini Videos

// hello();
// function hello(){
//     console.log("hello world");
// }

// console.log(hello);
// const hello = "hello world";
// console.log(hello);




// Hoisting in JavaScript is a mechanism where variable and function declarations are moved to the top of their containing scope (either global or function scope) during the compile phase, before the code is executed. However, only the declarations are hoisted, not the initializations.

// Key Points of Hoisting -

// Variables declared using var are hoisted and initialized with undefined.
// Functions declared with the function keyword are hoisted along with their entire function body.
// Variables declared using let and const are also hoisted, but they are not initialized until their actual declaration in the code. Accessing them before the declaration results in a ReferenceError due to the Temporal Dead Zone (TDZ).
// Function expressions (functions assigned to variables) are not hoisted because they follow the hoisting behavior of variables, not functions.
// Variable Hoisting with var:
// Variables declared with var are hoisted to the top and initialized with undefined.


// Variable Hoisting with var -
// Example:
console.log(a);  // Output: undefined (due to hoisting)
var a = 5;
console.log(a);  // Output: 5
// Explanation: During the compile phase, JavaScript moves the declaration of var a; to the top, so the code behaves like this:

// Example 2
var a;
console.log(a);  // undefined
a = 5;
console.log(a);  // 5


// Variable Hoisting with let and const -
// Variables declared with let and const are hoisted, but they are not initialized until the code reaches the line where they are declared. Trying to access them before their declaration will throw a ReferenceError due to the Temporal Dead Zone (TDZ).
// Example:
console.log(x);  // Error: Cannot access 'x' before initialization
let x = 10;
console.log(x);  // Output: 10
// Explanation: The declaration let x; is hoisted, but x is not initialized until the line let x = 10; is reached. Before this line, x is in the TDZ, where it cannot be accessed.



// Function Hoisting:
// Function declarations are fully hoisted, meaning both the function name and its body are moved to the top of the scope. You can call a function before it's declared in the code.
// Example:
console.log(add(2, 3));  // Output: 5
function add(a, b) {
    return a + b;
}
// Explanation: The function add is hoisted in its entirety, so the code behaves as if the function were declared at the top.




// Function Expression Hoisting:
// In the case of function expressions (where functions are assigned to variables), only the variable declaration is hoisted, not the function definition. This means you cannot call the function before the variable is initialized.
// Example:
console.log(subtract(5, 3));  // Error: subtract is not a function
var subtract = function (a, b) {
    return a - b;
};
// Explanation: The declaration var subtract; is hoisted to the top, but the function definition is not. Therefore, at the time of the console.log call, subtract is still undefined, leading to an error.