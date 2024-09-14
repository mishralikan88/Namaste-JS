// array push pop

// array shift unshift

let fruits = ["apple", "mango", "grapes"];

console.log(fruits);

// push - pushes item(s) at the end of the array & mutates the array .

fruits.push("banana");

console.log(fruits);

// It returns array length of the mutated array.

const length = fruits.push("cherry")
console.log(length)


// pop() pops out last element of the array and returns it . It also mutates the original array.

// let poppedFruit = fruits.pop();

// console.log(fruits);

// console.log("popped fruits is", poppedFruit);

// unshift - pushes item(s) at the beginning of the array and mutates the array . It returns array length of the mutated array.

const newlength = fruits.unshift("banana");

console.log(fruits)

console.log(newlength)


// fruits.unshift("myfruit");


// console.log(fruits);

// shift -removes the first element of the array and returns it . It also mutates the original array.

// let removedFruit = fruits.shift();

// console.log(fruits);

// console.log("removed fruits is ", removedFruit);


// let fruits = ["apple", "mango", "grapes"];

// push(): Adds one or more elements to the end of the array.

fruits.push("Pineapple"); // ["Apple", "Orange", "Mango", "Pineapple"]

// pop(): Removes the last element from the array and returns it.

let lastFruit = fruits.pop(); // "Pineapple", fruits = ["Apple", "Orange", "Mango"]

// shift(): Removes the first element from the array and returns it.

let firstFruit = fruits.shift(); // "Apple", fruits = ["Orange", "Mango"]

// unshift(): Adds one or more elements to the beginning of the array.

fruits.unshift("Strawberry"); // ["Strawberry", "Orange", "Mango"]

// slice(): Returns a shallow copy of a portion of the array into a new array.


let citrus = fruits.slice(1, 2); // ["Orange"]

// splice(): Adds or removes elements from an array at a specified index.


fruits.splice(1, 1, "Kiwi"); // ["Strawberry", "Kiwi", "Mango"]

// forEach(): Executes a provided function once for each array element.


fruits.forEach(function (fruit) {
    console.log(fruit);
});

// Output: "Strawberry", "Kiwi", "Mango"

// map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.

let upperFruits = fruits.map(fruit => fruit.toUpperCase());// ["STRAWBERRY", "KIWI", "MANGO"]

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.

let longNames = fruits.filter(fruit => fruit.length > 5); // ["Strawberry"]

// find(): Returns the value of the first element in the array that satisfies the provided testing function.


let found = fruits.find(fruit => fruit === "Kiwi"); // "Kiwi"

// reduce(): Executes a reducer function on each element of the array, resulting in a single output value.

let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0); // 16


// splice

// The splice() method in JavaScript is a powerful and versatile method used to modify an array in place. It can be used to add, remove, or replace elements within an array.

// Syntax - array.splice(start, deleteCount, item1, item2, ..., itemN);

// start: The index at which to start changing the array. If start is greater than the array's length, it defaults to the array's length. If start is negative, it counts back from the end of the array.
// deleteCount: The number of elements to remove from the array, starting at start. If deleteCount is omitted or set to 0, no elements are removed.
// item1, item2, ..., itemN: The elements to add to the array, starting at start. If no elements are provided, splice() only removes elements.

// Examples


// 1. Removing Elements
// To remove elements from an array, specify the start index and deleteCount.
// let fruits = ["apple", "banana", "cherry", "date"];
// // Remove 2 elements starting at index 1
// let removed = fruits.splice(1, 2);
// console.log(fruits);   // ["apple", "date"]
// console.log(removed);  // ["banana", "cherry"]
// // Explanation: splice(1, 2) starts at index 1 and removes 2 elements ("banana" and "cherry").


// 2. Adding Elements
// To add elements without removing any, set deleteCount to 0 and provide elements to add.
// let fruits = ["apple", "banana", "date"];
// fruits.splice(2, 0, "cherry"); // Add "cherry" at index 2
// console.log(fruits); // ["apple", "banana", "cherry", "date"]
// // Explanation: splice(2, 0, "cherry") starts at index 2, removes 0 elements, and adds "cherry".

// 3. Replacing Elements
// To replace elements, specify both deleteCount and new elements to add.
// let fruits = ["apple", "banana", "date"];
// // Replace 1 element at index 1 with "cherry" and "fig"
// fruits.splice(1, 1, "cherry", "fig");
// console.log(fruits); // ["apple", "cherry", "fig", "date"]
// // Explanation: splice(1, 1, "cherry", "fig") starts at index 1, removes 1 element ("banana"), and adds "cherry" and "fig".

// Return Value
// Return Value: splice() returns an array containing the removed elements.
// If no elements are removed, it returns an empty array.

// Key Points of slice()
// Mutates the Original Array: splice() changes the original array and does not create a new one.
// Negative Indices: You can use negative indices to start splice() from the end of the array.
// Dynamic Behavior: It can be used for a wide range of operations: removing, adding, and replacing elements.


// 1. Removing Elements


// Case 1.1: Remove elements from the beginning of the array.
// let array = [1, 2, 3, 4, 5];
// array.splice(0, 3); // Start at index 0, remove 3 elements
// console.log(array); // [4, 5]

// Case 1.2: Remove elements from the middle of the array.
// let array = [1, 2, 3, 4, 5];
// array.splice(2, 2); // Start at index 2, remove 2 elements
// console.log(array); // [1, 2, 5]

// Case 1.3: Remove elements from the end of the array.
// let array = [1, 2, 3, 4, 5];
// array.splice(3, 2); // Start at index 3, remove 2 elements
// console.log(array); // [1, 2, 3]

// Case 1.4: start is greater than the array's length.
// let array = [1, 2, 3];
// array.splice(10, 1); // Start at index 10 (out of bounds), remove 1 element
// console.log(array); // [1, 2, 3] (No elements are removed)

// Case 1.5: deleteCount is 0.
// let array = [1, 2, 3, 4];
// array.splice(2, 0, 5, 6); // Start at index 2, remove 0 elements, add 5 and 6
// console.log(array); // [1, 2, 5, 6, 3, 4]


// 2. Adding Elements


// Case 2.1: Add elements without removing any.
// let array = [1, 2, 3];
// array.splice(1, 0, 4, 5); // Start at index 1, remove 0 elements, add 4 and 5
// console.log(array); // [1, 4, 5, 2, 3]

// Case 2.2: Add elements at the end of the array.
// let array = [1, 2, 3];
// array.splice(3, 0, 4, 5); // Start at index 3, remove 0 elements, add 4 and 5
// console.log(array); // [1, 2, 3, 4, 5]


// 3. Replacing Elements


// Case 3.1: Replace elements in the middle of the array.
// let array = [1, 2, 3, 4];
// array.splice(1, 2, 5, 6); // Start at index 1, remove 2 elements, add 5 and 6
// console.log(array); // [1, 5, 6, 4]

// Case 3.2: Replace elements with the same number of elements.
// let array = [1, 2, 3, 4];
// array.splice(2, 2, 5, 6); // Start at index 2, remove 2 elements, add 5 and 6
// console.log(array); // [1, 2, 5, 6]

// Case 3.3: Replace elements and add more elements.
// let array = [1, 2, 3, 4];
// array.splice(1, 1, 5, 6, 7); // Start at index 1, remove 1 element, add 5, 6, and 7
// console.log(array); // [1, 5, 6, 7, 3, 4]


// 4. Negative Indices


// Case 4.1: Use negative indices to start from the end.
// let array = [1, 2, 3, 4, 5];
// array.splice(-3, 2); // Start 3 elements from the end, remove 2 elements
// console.log(array); // [1, 2, 5]

// Case 4.2: Use negative indices to add elements.
// let array = [1, 2, 3, 4];
// array.splice(-1, 0, 5, 6); // Start at the last element, remove 0 elements, add 5 and 6
// console.log(array); // [1, 2, 3, 4, 5, 6]