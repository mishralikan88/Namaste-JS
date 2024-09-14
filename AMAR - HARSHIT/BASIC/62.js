// every method - returns a boolean based on the condition . condition for all elements should be satisfied to get a true value
// const numbers = [2,4,6,9,10];


// const ans = numbers.every((number)=>number%2===0);

// console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


const ans = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans);


// every() Method
// The every() method tests whether all elements in the array pass the condition implemented by the provided function. It returns true if all elements satisfy the condition; otherwise, it returns false.

// Syntax: array.every(callback(element, index, array), thisArg)

// callback: A function to test each element, taking arguments:
// element: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array on which every was called.
// thisArg (optional): A value to use as this inside the callback function.

// Example:

const numbers = [2, 4, 6, 8];

// Check if all numbers are even
const allEven = numbers.every(num => num % 2 === 0);

console.log(allEven);  // Output: true

// In this example, every() returns true because all the numbers in the array are even.