// find method  - // Syntax- array.find(callback(element, index, array), thisArg)

// const myArray = ["Hello", "cat", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3); // returns the first found element which satisfies the condition.
// console.log(ans);

const users = [
    { userId: 1, userName: "harshit" },
    { userId: 2, userName: "harsh" },
    { userId: 3, userName: "nitish" },
    { userId: 4, userName: "mohit" },
    { userId: 5, userName: "aaditya" },
];

const myUser = users.find((user) => user.userId === 3);
console.log(myUser);

// The find() method in JavaScript is used to return the first element in an array that satisfies a provided condition (or testing function). If no element matches the condition, it returns undefined.


// Parameters-

// callback: A function that is executed on each element of the array. It takes three arguments
// element: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array on which find was called.
// thisArg (optional): A value to use as this when executing the callback function.

// Example-

const numbers = [10, 20, 30, 40, 50];

// Find the first number greater than 25

// const result = numbers.find((num) => num > 25);
// console.log(result);  // Output: 30

// In this example, find() returns the first element that satisfies the condition num > 25, which is 30. 
// If no element matches, the output would be undefined.

// Example With thisArg : 

const array = [1, 2, 3, 4, 5];

const obj = {
    threshold: 3,
    isGreaterThanThreshold(num) {
        return num > this.threshold; // this -> obj
    }
};

// Using `thisArg` to explicitly set `this` to `obj`
const result = array.find(function (num) {
    return num > this.threshold;
}, obj);

console.log(result); // Output: 4

// In the second example, the thisArg (obj) is passed to the find() method, so the callback can access this.threshold properly, and it returns the first number greater than 3, which is 4.