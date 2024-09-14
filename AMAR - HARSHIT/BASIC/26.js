// Intro to arrays - arrays are reference type objects.

// An array is a data structure that allows you to store multiple values in a single variable. These values can be of any type, including numbers, strings, objects, and even other arrays. Arrays are ordered collections, meaning that each element in an array has a specific position (index) that can be used to access it.

// How to create arrays ?

// using Array literal -

// let fruits1 = ["apple", "mango", "grapes"];
// console.log(fruits1)


// using Array constructor -

// let fruits = new Array("Apple", "Banana", "Mango");
// console.log(fruits)

// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]); // array indexing - array item at 2nd index


// deep copy 

// let fruits = ["apple", "mango", "grapes"];
// let fruitscopy = fruits // reference copy . Both references are pointing to same array which is an object in javascript.Arrays are objects.

// fruits[1] = "banana";
// fruitscopy[0] = "pineapple"
// fruits[1] = "peach"


// console.log(fruits);
// console.log(fruitscopy);

// shallow copy -

// using slice-

// let fruits = ["apple", "mango", "grapes"];
// let fruitsCopy = fruits.slice();

// fruitsCopy[1] = "banana";

// console.log(fruits);      // ["apple", "mango", "grapes"]
// console.log(fruitsCopy);  // ["apple", "banana", "grapes"]

// using spread operator

// let fruits = ["apple", "mango", "grapes"];
// let fruitsCopy = [...fruits]; // Array destructuring / unpacking

// fruitsCopy[1] = "banana";

// console.log(fruits);      // ["apple", "mango", "grapes"]
// console.log(fruitsCopy);  // ["apple", "banana", "grapes"]

// using Array.from() -

// let fruits = ["apple", "mango", "grapes"];
// let fruitsCopy = Array.from(fruits);

// fruitsCopy[1] = "banana";

// console.log(fruits);      // ["apple", "mango", "grapes"]
// console.log(fruitsCopy);  // ["apple", "banana", "grapes"]

// using concat()

let fruits = ["apple", "mango", "grapes"];
// let fruitsCopy = fruits.concat();

// fruitsCopy[1] = "banana";

// console.log(fruits);      // ["apple", "mango", "grapes"]
// console.log(fruitsCopy);  // ["apple", "banana", "grapes"


// let obj = {}; // object literal
// console.log(typeof fruits); // type of array is object
// console.log(typeof obj); // type of object is object
// console.log(Array.isArray(fruits)); // To check if fruits is an array or not.This always returns a boolean. true because fruits is created using array literal syntax.
// console.log(Array.isArray(obj)); // false becuase obj is created using object literal and obj is object. arrays are also objects.








