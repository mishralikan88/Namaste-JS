// Important array methods 

const numbers = [4, 2, 5, 8];

numbers.forEach(function (number, index) {
    console.log(`index is ${index} number is ${number}`);
});

numbers.forEach(function (number, index) {
    console.log(number * 3, index);
})


// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }






// The forEach method in JavaScript is a built-in array method that executes a provided function once for each element in the array. It is mainly used to iterate over arrays, performing a specific action on each element.

// Key Characteristics of forEach:

// Iterates Over All Elements: The forEach method iterates over every element in an array.
// No Return Value: It does not return a new array or any other value. It is purely for executing a side-effect (e.g., logging, modifying, etc.) on each array element.
// Callback Function: It takes a callback function as an argument, and this callback is executed for each element in the array.
// Does Not Work on Empty Slots: forEach skips over any uninitialized elements in sparse arrays (i.e., arrays with empty slots).

// Syntax:

// array.forEach(function(element, index, array) {
//     // Your code here
// }, thisArg);


// Parameters:
// element: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array that forEach is being called on.
// thisArg (optional): A value to use as this when executing the callback.


// Example 1: Basic Usage

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(num) {
//     console.log(num);  // Output: 1 2 3 4 5
// });


// Example 2: Using index

// const fruits = ["apple", "banana", "mango"];
// fruits.forEach(function(fruit, index) {
//     console.log(`Index ${index}: ${fruit}`);
// });
// Output:
// Index 0: apple
// Index 1: banana
// Index 2: mango


// Example 3: Modifying Elements (but not returning a new array)

// const names = ["Alice", "Bob", "Charlie"];
// names.forEach(function(name, index, arr) {
//     arr[index] = name.toUpperCase();  // Modifies the original array
// });
// console.log(names);  // Output: ["ALICE", "BOB", "CHARLIE"]


// Example 4: thisArg Usage
// You can pass an optional thisArg parameter to use as this inside the callback function. If omitted, this defaults to undefined in strict mode or the global object in non-strict mode.

// const obj = {
//     multiplier: 2
// };
// const numbers = [1, 2, 3, 4];
// numbers.forEach(function(num) {
//     console.log(num * this.multiplier);  // Multiplies each number by 2
// }, obj);  // Passing `obj` as `thisArg`
// Output: 2 4 6 8


// Key Points:
// No Return Value: forEach always returns undefined. If you need a new array based on transformation, use methods like map.
// Non-Breakable Loop: You cannot break out of a forEach loop like you can with a regular for loop or for...of loop. If you need to stop iteration under certain conditions, use for or some.
// No Chaining: Since forEach returns undefined, you cannot chain it with other array methods.

// Example of a Use Case:
// Logging array elements with additional information.

const students = ["John", "Sara", "Tom"];
students.forEach(function (student, index) {
    console.log(`Student ${index + 1}: ${student}`);
});
// Output:
// Student 1: John
// Student 2: Sara
// Student 3: Tom

// Summary:

// forEach is used to iterate over array elements and execute a function for each one.
// It doesn't return a new array and cannot be used to break the loop.
// It is ideal for tasks like logging, applying changes directly to the original array, or performing actions on each element without needing a new array.