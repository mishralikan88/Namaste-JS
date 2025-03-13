# Episode 14: Callback Functions in JS featuring Event Listeners

# Callback Functions

* Functions in JavaScript are first-class citizens, meaning they can be treated like any other variable. You can take a function A and pass it as an argument to another function B. In this case, A is called a callback function. Essentially, you are giving function B the ability to call function A whenever it needs to.

* Callback functions enable us to interact with the asynchronous world while working in a synchronous environment.

```js

setTimeout(function () {
    console.log("Timer"); // This message will be logged after the specified delay.
}, 1000); // The first argument is the callback function, and the second argument is the delay time in milliseconds (1000ms = 1 second).


```

* JavaScript is a synchronous, single-threaded language, meaning it executes code line by line, one task at a time. However, JavaScript can perform asynchronous operations using mechanisms like callbacks, promises, and async/await.


* ```js

  // Using setTimeout to schedule a callback function after 30000 ms (30 seconds).

   setTimeout(function () {
    console.log("timer"); // This will print "timer" after 30 seconds.
  }, 30000);

  // Defining a function 'x' that takes another function 'y' as an argument.

  function x(y) {
    console.log("x"); // Prints "x" immediately.
    y(); // Calls the function 'y', printing "y" immediately.
  }

  // Calling function 'x' and passing an anonymous function 'y' as an argument.
   x(function y() {
    console.log("y"); // Prints "y" immediately.
  });

  // The output will be:
  // x
  // y
  // (after 30 seconds) timer

  ```

**Call Stack 30 seconds ago:**

![call stack](../assets/setTimeOut.jpg "setTimeout in call stack")

  * At first, the call stack has x and y in it. Once the code finishes running, both are removed, leaving the stack empty. Then, after 30 seconds, the setTimeout callback (an anonymous function) suddenly appears at the top of the stack.

**Call Stack 30 seconds later:**

![call stack](../assets/setTimeOut1.0.jpg "setTimeout in call stack")

  * In summary, all three functions are executed through the call stack. If any operation blocks the call stack, it is called **blocking the main thread.**. If x() takes 30 seconds to run, JavaScript has to wait for it to finish because it only has one call stack and one main thread. So, never block the main thread.

  * Always use **async** for functions that take time to finish. For example, setTimeout uses async under the hood.

* ```js

  // Prints a string after a random short delay, then calls the callback function

  function printStr(str, cb) {
    setTimeout(() => {
        console.log(str); // Print the string
        cb(); // Call the next function when done
    }, Math.floor(Math.random() * 100) + 1); // Random delay between 1 & 100 ms
  }

  
  function printAll() {
    printStr("A", () => { // Print "A" first
        printStr("B", () => { // After "A", print "B"
            printStr("C", () => {}); // After "B", print "C"
        });
    });
  }

  printAll(); // Output: A B C (in order)

  ```

# Code Explanation - 

**Step 1:** Call printAll()
The execution starts when the printAll() function is called.

printAll(); // Starts the process


**Step 2:** Execute printAll() Function
Inside the printAll() function, the first function call is:

printStr("A", () => {
    printStr("B", () => {
        printStr("C", () => {});
    });
});

What Happens Here:

-> The printStr("A", ...) function is called.
-> This goes into the call stack.
-> Inside printStr, a setTimeout is set up with a random delay (between 1 and 100 milliseconds).
-> The setTimeout itself is an asynchronous operation, so it is pushed to the Web API environment (outside the call stack).
-> The printStr("A", ...) call is removed from the call stack, leaving it empty.

**Step 3:** Wait for setTimeout to Complete.
The setTimeout delay (say 50 milliseconds) runs in the background (Web API).

During this time, the call stack remains empty, and JavaScript can perform other tasks.
After the delay, the callback function inside setTimeout moves to the Callback Queue.
The Event Loop checks the call stack and, since it's empty, moves the callback from the queue to the call stack.

**Step 4:** Print "A"
The callback of setTimeout finally gets executed:

console.log("A"); // Prints "A" to the console
cb(); // Calls the next function

What Happens Here:
-> "A" is printed to the console.
-> The callback (cb()) is immediately called after printing.
-> Now, cb() triggers the next printStr call:

**Step 5:** Print "B" (Nested Callback)
Inside the callback of "A", the next call is:

printStr("B", () => {
    printStr("C", () => {});
});

Similar Flow as "A":
-> Calls printStr("B", ...) and sets up another setTimeout.
-> setTimeout moves to the Web API, and the call stack becomes empty.
-> After the random delay (say 30 milliseconds), the callback moves to the Callback Queue.
-> Event Loop moves the callback to the call stack since it's empty.
-> "B" gets printed to the console, and the next callback (cb()) is triggered.

**Step 6:** Print "C" (Next Nested Callback)
The process repeats for "C":

printStr("C", () => {});

Same Flow:
-> Sets up a setTimeout with a random delay.
-> After the delay, prints "C".

**Final Step:** Call Stack Becomes Empty
After printing "C", there are no more nested callbacks to execute.
The call stack is empty, and all tasks are completed.

The final output is:
A
B
C

# Why It Works in Order (Despite Random Delays)

-> Each call to printStr is nested inside the previous callback.
-> The next function doesn’t start until the previous one finishes, even if the delay is random.
-> The callback chain ensures that the sequence is maintained.

**Visual Flow:**

printAll() → Calls printStr("A", ...)
printStr("A", ...) → Waits for random delay → Prints "A" → Calls printStr("B", ...)
printStr("B", ...) → Waits for random delay → Prints "B" → Calls printStr("C", ...)
printStr("C", ...) → Waits for random delay → Prints "C"

The **key idea** is that each function call waits for the previous one to finish because the next function is inside the callback of the previous one. This is why the sequence is always maintained, regardless of the random delay.


# Understanding Event Listeners and this in JavaScript

* To understand event listeners, let's create a button in HTML and attach an event to it.

  ```js
  
  // index.html
  
  <button id="clickMe">Click Me!</button>


  // index.js

  // Attach a click event listener to the button with ID "clickMe"
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    // When the click event occurs, this callback function (xyz) is pushed into the call stack and executed.
    console.log("Button clicked");
  });

  ```

To understand how the call stack works, put a breakpoint inside this callback and inspect the call stack in the console.

![call stack](../assets/EventListner1.jpg)

In the image above, this refers to the button that was clicked.

# How the keyword this works in regular functions versus arrow functions ?

In JavaScript, the behavior of the this keyword differs between regular functions and arrow functions. Let’s understand how it works in each case.

**Regular Function (function xyz())**

document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Button clicked");
  console.log(this); // Points to the button that was clicked
});

Explanation:

-> When you use a regular function as an event listener, the value of this inside the function points to the HTML element that triggered the event (in this case, the button).

-> In other words, this refers to the button that was clicked.

-> This behavior occurs because regular functions get their this value based on how they are called (through the event listener in this case).


**Arrow Function (() => {})**

document.getElementById("clickMe").addEventListener("click", () => {
    console.log("Arrow function invoked by button click");
    console.log(this); // Points to the window object
});

Explanation:

-> When you use an arrow function as an event listener, the value of this does not point to the button.
-> Instead, it inherits this from its surrounding scope (a concept called lexical scoping).
-> In the global context, this usually points to the window object.
-> In strict mode, this becomes undefined, which is the default behavior in modern browsers.



# Managing State Securely in JavaScript: Increment Counter Button

# 📝 Problem with Global Variables

Let's implement an increment counter button to understand how to manage state securely in JavaScript.

**❌ Using a Global Variable (Not Recommended)**

let count = 0;
document.getElementById("clickMe").addEventListener("click", function xyz() { 
    console.log("Button clicked", ++count);
});


**Code Explanation**

Global Variable Declaration:
The variable count is declared in the global scope.
let count = 0;

Event Listener Attachment:
The addEventListener method attaches the xyz callback function to the button click event.
document.getElementById("clickMe").addEventListener("click", function xyz() { 
    console.log("Button clicked", ++count);
});

Closure Formation:
When the xyz function is created, it "remembers" the surrounding scope (global scope) where count is defined.This means that even after the initial script finishes running, xyz still has access to count through closure.


**Why Doesn’t count Disappear?**

The callback function xyz forms a closure with the global scope, keeping a reference to count.
As long as the event listener is active, the closure keeps count alive, preventing it from being garbage collected or lost.

**In Simple Terms:**

The callback function "remembers" the global count variable because it formed a closure.
Every time you click the button, it reuses the same count variable, updating and logging it correctly.

**The Problem with Global Variables**

Global variables can be accessed and modified from anywhere in the code, making them prone to accidental changes.This could lead to bugs and unexpected behavior.

**Problem Example**

let count = 0;
document.getElementById("clickMe").addEventListener("click", function xyz() { 
    console.log("Button clicked", ++count);
});

// Somewhere else in the code
count = 100; // Someone mistakenly overwrites the count


💥 Now, clicking the button logs: Button clicked 101

This unexpected result breaks the logic and highlights the risk of using global variables.

# The Solution: Using Closures for Data Hiding

To protect the count variable, we encapsulate it within a function using closures. This way, it is not directly accessible from the global scope.

**✔️ Using Closures (Recommended)**

function createCounter() {
    let count = 0; // Local variable inside the closure
    return function () {
        console.log("Button clicked", ++count);
    };
}

const increment = createCounter();
document.getElementById("clickMe").addEventListener("click", increment);

**Code Explanation**

Encapsulation with Closures:
The createCounter function has a local variable count that is not exposed globally.
The function returns an inner function that has access to count through closure.

Data Security:
The count variable is secure and cannot be modified directly from outside the function.
Preserving State:

Even after the outer function (createCounter) has finished executing, the inner function remembers the value of count through closure.

**🌟 Benefits of Using Closures**

-> Encapsulation: Keeps data private and secure.
-> Controlled State Management: Only the returned function can access or modify count.
-> Prevents Accidental Modifications: The count variable is not exposed to the global scope, reducing the risk of unintended changes.


**💡 Important points:**

-> Avoid using global variables as they are prone to accidental modifications.
-> Use closures to encapsulate data and maintain state securely.
-> This approach ensures that your counter logic is reliable and protected from external interference.


# Garbage Collection and removeEventListeners

**Why do we remove Event Listeners?**

-> Event listeners are considered heavy because they form closures, which can lead to memory leaks if not properly managed. Closures keep references to the variables within their scope, even after the functions have executed. This means that even when the call stack is empty, the event listener still holds onto the memory allocated for variables, as it doesn't know when it might need them again (e.g., when the user clicks a button or triggers an event).

-> Common event listeners like onClick, onHover, and onScroll can consume significant memory due to closures. If not removed when no longer needed, they continue to occupy memory, causing performance issues and making the page less responsive.

-> To prevent memory leaks and improve performance, it is a good practice to remove event listeners when they are no longer required. Once an event listener is removed using removeEventListener, it becomes eligible for garbage collection, freeing up memory and enhancing page responsiveness.

<hr>

Watch Live On Youtube below:

<a href="https://www.youtube.com/watch?v=btj35dh3_U8&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/btj35dh3_U8/0.jpg" width="750"
alt="Callback Functions in JS ft. Event Listeners in JS Youtube Link"/></a>