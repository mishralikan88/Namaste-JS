// Callback function

function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

// Parent function 

function myFunc(callback){
    console.log("hello there I am a func and I can..")
    callback("harshit");
}


myFunc(myFunc2);


// A callback function in JavaScript is a function that is passed as an argument to another function and is intended to be executed after the completion of some operation or event. Callback functions are a way to ensure that code is executed only after a certain task is finished, often used in asynchronous operations.

// Key Points:
// Passed as an Argument: A callback function is passed as an argument to another function.
// Executed Later: The callback function is invoked inside the parent function to perform further actions after the parent function completes its task.
// Common in Asynchronous Operations: Callbacks are widely used in asynchronous operations such as fetching data from an API, reading files, or setting timers, where you need to execute code only when a task is done.


// Synchronous Callback Example:
// In this example, the callback function is executed immediately within the parent function.


function greet(name) {
    console.log("Hello, " + name);
}

function processUserInput(callback) {
    const name = "Likan";
    callback(name);  // Passing the name to the callback function
}

processUserInput(greet);  // Output: "Hello, Likan"

// Explanation:

// The function greet is passed as a callback to processUserInput.
// Inside processUserInput, the greet function is invoked with the value name, so it prints "Hello, Likan."


// Asynchronous Callback Example:
// Callbacks are particularly useful in asynchronous code where you want to execute something after an operation (like a timeout, network request, etc.) finishes.


function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();  // Executing the callback after data is fetched.
    }, 2000);  // Simulating an asynchronous operation
}

function processData() {
    console.log("Processing data...");
}

fetchData(processData);  // Output: "Data fetched" followed by "Processing data..."

// Explanation:

// fetchData simulates an asynchronous operation using setTimeout, which waits for 2 seconds before fetching data.
// Once the data is fetched (after 2 seconds), it calls the processData function as a callback to process the fetched data.


// Named vs. Anonymous Callbacks -

// Named Callback: When the callback is defined as a named function and passed to another function.


function callback() {
    console.log("This is a named callback");
}

setTimeout(callback, 1000);  // Output: "This is a named callback" after 1 second


// Anonymous Callback: When the callback function is defined inline without a name.


setTimeout(function() {
    console.log("This is an anonymous callback");
}, 1000);  // Output: "This is an anonymous callback" after 1 second


// Callback in Array Methods:

// Many JavaScript array methods such as map, filter, and forEach use callback functions.


let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled);  // Output: [2, 4, 6, 8]

// Why Use Callbacks:
// Asynchronous Programming: Callbacks help manage asynchronous operations, ensuring that certain code is only executed after tasks like fetching data or waiting for a timeout are completed.
// Code Modularity: By passing functions as callbacks, you can make your code more modular and reusable.
// Event Handling: Callbacks are commonly used in event-driven programming, such as handling user actions like clicks or keypresses.