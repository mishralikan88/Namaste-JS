// some method - returns a boolean based on the condition .condition for some or all elements should be satisfied to get a true value

const numbers = [3, 5, 11, 9];


// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);

const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 22000 },
    { productId: 3, productName: "tv", price: 35000 },
    { productId: 3, productName: "macbook", price: 25000 },
]

const ans = userCart.some((cartItem) => cartItem.price > 100000);
console.log(ans);



// some() Method
// The some() method tests whether at least one element in the array passes the condition implemented by the provided function. It returns true if at least one element satisfies the condition; otherwise, it returns false.

// Syntax:

// array.some(callback(element[, index[, array]])[, thisArg])
// callback: A function to test each element, taking the same arguments as every() (i.e., element, index, and array).
// thisArg (optional): A value to use as this inside the callback function.

// Example:

const nums = [1, 3, 5, 8];


const hasEven = nums.some(num => num % 2 === 0); // Check if there is at least one even number

console.log(hasEven);  // Output: true

// In this example, some() returns true because at least one number (8) in the array is even.