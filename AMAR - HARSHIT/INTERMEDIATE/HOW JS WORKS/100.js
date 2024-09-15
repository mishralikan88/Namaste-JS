function myFunction(power) {
    return function (number) {
        return number ** power;
    }
}

const square = myFunction(2);  // returns a function that squares a number
const ans = square(3);  // 3^2 = 9
console.log(ans);  // Output: 9

const cube = myFunction(3);  // returns a function that cubes a number
const ans2 = cube(3);  // 3^3 = 27
console.log(ans2);  // Output: 27


// Step-by-Step Explanation -

// 1. Higher-Order Function (myFunction) -
// myFunction takes an argument power.
// It returns another function (the inner function) that takes a number and raises it to the power of the power argument from myFunction.
// This is an example of closures because the inner function (returned function) retains access to the power variable even after myFunction has executed.

// 2. Closures in Action-
// When you call myFunction(2), it returns a new function that squares numbers.
// When you call myFunction(3), it returns a new function that cubes numbers.
// These inner functions "remember" the power value because of the closure.

// 3. Explanation of Operations:
// const square = myFunction(2);: Creates a function that squares any number (number ** 2).
// const ans = square(3);: Calls the function returned by myFunction(2) with 3, which calculates 3^2 = 9.
// Similarly, myFunction(3) returns a function that cubes a number, so cube(3) calculates 3^3 = 27.


// Using Arrow Function Syntax:

// Regular Function:
// function myFunction(power) {
//     return function(number) {
//         return number ** power;
//     }
// }

// Arrow Function Syntax:
// const myFunction = (power) => (number) => number ** power;


// Explanation of Arrow Functions-
// (power) => (number) => number ** power;:
// The first arrow function takes power as an argument.
// The second arrow function (which is returned) takes number as an argument and returns number ** power.
// This is a concise way of writing the same function as before.