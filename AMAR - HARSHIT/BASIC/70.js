// optional chaining (?.)

// Optional chaining (?.) in JavaScript is a syntax that allows you to safely access deeply nested object properties without having to manually check for null or undefined values at each level. If the value before the ?. is null or undefined, the expression short-circuits and returns undefined instead of throwing an error.

const user = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}

console.log(user?.firstName); // If user does not exist we get undefined , if exist we get the actual user object.
console.log(user?.address?.houseNumber);

// Syntax:

// obj?.property
// obj?.[expression]
// obj?.method?.()



// How it works:
// Property Access: If the object or property does not exist (i.e., is null or undefined), it returns undefined instead of throwing an error.
// Method Call: You can use optional chaining to safely call a method. If the method does not exist, the call is skipped, and undefined is returned.
// Array Indexing: You can use it to access elements in arrays or collections, ensuring you don't get an error if the array is undefined.


// Example 1: Basic Property Access

// const user = {
//   name: 'Alice',
//   address: {
//     city: 'Wonderland'
//   }
// };

// Safe access using optional chaining
// console.log(user?.address?.city);  // Output: 'Wonderland'

// If 'address' doesn't exist, it returns undefined
// console.log(user?.profile?.age);  // Output: undefined


// Example 2: Optional Method Call

const userx = {
    greet: function () {
        return 'Hello!';
    }
};

// Safe method call
console.log(userx.greet?.());  // Output: 'Hello!'

// If the method doesn't exist, it returns undefined instead of throwing an error
const anotherUser = {};
console.log(anotherUser.greet?.());  // Output: undefined



// Example 3: Array Indexing

const arr = [1, 2, 3];
console.log(arr?.[2]);  // Output: 3
console.log(arr?.[5]);  // Output: undefined


// Example 4: Function Parameter Access
// If you have a function that accepts an object as a parameter, you can use optional chaining to safely access properties in that object.

// function getUserName(user) {
//   return user?.name ?? 'Anonymous';
// }

// console.log(getUserName({ name: 'John' }));  // Output: 'John'
// console.log(getUserName(null));              // Output: 'Anonymous'


// Combining with Nullish Coalescing (??)
// You can combine optional chaining with the nullish coalescing operator (??), which provides a default value when the result of the optional chaining is undefined or null.

// const user = {
//   name: 'Alice',
//   address: null
// };

// console.log(user?.address?.city ?? 'City not available');  // Output: 'City not available'

// Key Points-

// Short-circuits if the left-hand side is null or undefined, returning undefined.
// Avoids the need for multiple checks, making code cleaner and less error-prone.
// Commonly used for accessing deeply nested properties or methods without worrying about null or undefined values at intermediate levels.