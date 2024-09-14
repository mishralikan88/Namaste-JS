// Creating an array using the literal notation
let numbers = [1, 2, 3]; // same as let numbers = new Array(1, 2, 3)

// The Array constructor can also create an array, but using the literal syntax [1,2,3] is more common.

// Checking the prototype of `numbers` array
console.log(Object.getPrototypeOf(numbers));

// Output: 
// This will output the prototype object that `numbers` inherits from, which is `Array.prototype`.
// It shows methods like push, pop, shift, map, etc., because all arrays inherit these methods from `Array.prototype`.

// Logging `Array.prototype` to show that the methods of arrays are inherited from here

console.log(Array.prototype); // function.Prototype
// console.log(numbers.__proto__) // object.__proto__

// Output: 
// Array.prototype is the prototype object that contains all the array methods. 
// It includes methods like push, pop, slice, forEach, map, etc.

// Logging the `numbers` array itself
console.log(numbers);
// Output: [1, 2, 3] 
// This just prints the array with its values [1, 2, 3]

// Defining a simple function `hello`
function hello() {
    console.log("hello");
}
console.log(hello.prototype) // {} // Nothing has been added to this object yet.

// `hello` is just a regular function, and it also has its own prototype (like any function in JavaScript).
