function func() {
    let counter = 0;
    function innerFunc() {   // Create inner function
        if (counter < 1) {
            console.log("Hi You Called me");
            counter++;
        } else {
            console.log("I have been called already");
        }
    }
    return innerFunc;   // Return the inner function
}

const myFunc = func();
myFunc();  // First call
myFunc();  // Second call


// Concept Breakdown (Step by Step):

// 1. Outer Function: func()
// Purpose: The outer function func() is defined with a local variable counter initialized to 0.
// Key Variable:
// let counter = 0; — This variable will track how many times the inner function is called.
// Inner Function:
// Inside func(), a function innerFunc() is created. This inner function will modify and use the counter variable.
// Why does this matter?
// The variable counter is local to func() and can only be accessed within its scope.
// When func() is called, it returns the inner function (innerFunc), but not just the function itself—also the lexical environment (which includes counter).


// 2. Inner Function: innerFunc()
// Definition: innerFunc is defined inside func() and it performs the following:
// Checks if counter is less than 1.
// If it is, it prints "Hi You Called me" and increments the counter by 1.
// If counter is 1 or more, it prints "I have been called already".
// Why does this matter?
// The innerFunc() relies on the variable counter that’s defined in the outer function func(). This is an example of a closure, which means the inner function retains access to the variables in the outer function’s scope even after the outer function has finished execution.



// 3. Return the Inner Function: return innerFunc
// What Happens: When func() is called, it returns the innerFunc function.
// Key Point: func() does not execute the innerFunc; it only returns the function. So, innerFunc is available to be called later.
// Why does this matter?
// The function innerFunc has closed over the variable counter, meaning it has access to the counter variable even after func() has finished executing.
// This is the key characteristic of closures.


// 4. Function Invocation: const myFunc = func();
// What Happens: When func() is called, it returns the innerFunc function, along with the counter variable from the lexical scope of func().
// Result: Now myFunc contains the innerFunc function, which can be invoked later using myFunc().


// 5. First Call: myFunc();
// Execution:
// When myFunc() is called for the first time, the innerFunc function is executed.
// Since counter is 0, it prints "Hi You Called me".
// After that, it increments counter by 1, so now counter equals 1.
// Why does this matter?
// This demonstrates how state is being maintained across multiple calls. The counter variable is updated and the updated value is retained for future calls due to the closure.



// 6. Second Call: myFunc();
// Execution:
// When myFunc() is called again, innerFunc is executed.
// This time, counter is 1, so it prints "I have been called already".
// The counter variable is not modified because the condition (counter < 1) is no longer true.
// Why does this matter?
// The state (counter) is persistent across multiple calls to myFunc(), thanks to the closure. Each invocation of myFunc() remembers the value of counter from previous calls.



// Key Concepts (Detailed):

// Closure: A closure is formed when the inner function (innerFunc) retains access to variables from its outer function (func) even after the outer function has returned. Here, innerFunc has access to the counter variable, which is defined in func().

// Lexical Scoping:
// The variable counter is lexically scoped inside func(). This means that only functions defined within func() (like innerFunc) have access to counter.
// Even though func() finishes executing, the innerFunc retains access to counter due to lexical scoping.


// State Management: The variable counter is used to keep track of how many times myFunc() is called. The first call prints a message and increments counter, while subsequent calls print a different message because the counter has been updated.

// Function as a Return Value: Instead of immediately executing the innerFunc function, func() returns it. This allows the returned function to be called later (via myFunc()), giving it control over when to execute the logic.




// Summary of Execution Flow:

// Step 1: const myFunc = func();
// func() is called, initializing counter to 0 and returning the innerFunc function.

// Step 2: myFunc(); (First Call)
// innerFunc checks if counter < 1 (which is true), prints "Hi You Called me", and increments counter to 1.

// Step 3: myFunc(); (Second Call)
// innerFunc checks if counter < 1 (which is false), prints "I have been called already", and does not modify counter.

// Debug the code and check how state for counter is managed.





// Later
// // Example with var
// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log('var:', i);
//     }, 1000);
// }

// // Example with let
// for (let i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log('let:', i);
//     }, 1000);
// }