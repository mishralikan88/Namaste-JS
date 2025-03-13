# Episode 11 : setTimeout + Closures Interview Question

> **Time, tide, and JavaScript wait for none.**

*   ```js
    function x() {
    var i = 1;
    setTimeout(function() {
        console.log(i);
    }, 3000);
    console.log("Namaste Javascript");
     }
    x();

    // Output:
    // Namaste Javascript
    // 1 // after waiting 3 seconds

    ```

We might expect JavaScript to wait for 3 seconds, print 1, and then proceed to print the string. However, JavaScript prints the string immediately, waits for 3 seconds, and then prints 1.

Here’s why this happens:

* The function inside setTimeout forms a closure, meaning it remembers the reference to the variable i. Wherever the function goes, it carries this reference along with it.

* The setTimeout function takes this callback and attaches a timer of 3000 milliseconds (3 seconds), storing it for later execution. Meanwhile, JavaScript doesn’t wait and proceeds to the next line, printing the string "Namaste Javascript".

* Once the timer expires (after 3000 milliseconds), JavaScript places the callback function into the call stack and executes it, printing 1.

In summary, JavaScript’s asynchronous behavior allows the code to continue executing without waiting for the setTimeout timer to complete.

 
# Q1: Print the numbers 1 to 5 such that each number is printed after a delay equal to its value in seconds (e.g., 1 after 1 second, 2 after 2 seconds, and so on).
  
    ```js
    function x() {
    for(var i = 1; i<=5; i++){
        setTimeout(function() {
        console.log(i);
        }, i*1000);
        }
        console.log("Namaste Javascript");
    }
    x();

    // Output:
    // Namaste Javascript
    // 6
    // 6
    // 6
    // 6
    // 6
    ```

**Step 1: Understanding the Problem**

The given code is supposed to print numbers from 1 to 5, each after a delay corresponding to the number (1 second for 1, 2 seconds for 2, and so on). However, the actual output is:


Namaste Javascript
6
6
6
6
6

**Step 2: Why Does This Happen?**

This unexpected output is due to closures and how the setTimeout function works with the for loop and var.

🔑 Key Concepts:

Event Loop and Message Queue:

-> JavaScript has a single-threaded, non-blocking, asynchronous execution model.
-> The setTimeout function is a Web API that runs asynchronously.
-> After the timer expires, the callback function is pushed to the message queue and waits for the call stack to be empty.

Closures:

-> A closure is formed when an inner function remembers its lexical scope even after the outer function has finished execution.
-> In this case, the callback function inside setTimeout forms a closure and remembers the reference to the variable i.


**Step 3: Code Execution Flow with var**

Let's see how the code runs with var:

function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste Javascript");
}
x();


🚀 Step-by-Step Execution:

-> The function x() is called.
-> The for loop starts iterating with i = 1:
-> The setTimeout function is registered with a delay of 1 * 1000 milliseconds (1 second) in the Web API environment. As soon as the timer ends, the callback function is pushed into the Message Queue.
-> The loop continues and registers 5 setTimeout functions in total with increasing delays (2 sec, 3 sec, ... 5 sec).
-> Immediate Execution - After all setTimeout calls are registered, the next statement is executed - 'Namaste Javascript'.This happens immediately since console.log is synchronous.
-> 🧠 What Happens After Loop Completes:The value of i after the loop ends is 6.
-> The setTimeout callbacks are executed after the delay, but by that time, the value of i has already been updated to 6.Therefore, all the callbacks print 6.

**✅ Step 4: The Fix Using let**

Replacing var with let in the for loop solves the issue.

✅ Why Does let Work?

let has block scope. This means a new i is created for every iteration of the loop.
Hence, each iteration has its own unique i value when the callback function is called.

 🔧 Code with let:

function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste Javascript");
}
x();

📝 Output:

Namaste Javascript
1
2
3
4
5

# 🛠️ Alternative Fix Using Closures and var

If we want to use var, we can create a new copy of i by using an immediately invoked function expression (IIFE) or an inner function.

**🔧 Code with IIFE:**

function x() {
    for (var i = 1; i <= 5; i++) {

        // IIFE
        (function(j) {
            setTimeout(function() {
                console.log(j);
            }, j * 1000);
        })(i);

    }
    console.log("Namaste Javascript");
}
x();

✅ Why It Works -

-> The IIFE creates a new variable j for each iteration.
-> The closure now holds a reference to this new variable rather than the loop variable i.

**📝 Code with Inner Function:**

function x() {
    for (var i = 1; i <= 5; i++) {
        function close(j) {
            setTimeout(function() {
                console.log(j);
            }, j * 1000);
        }
        close(i);
    }
    console.log("Namaste Javascript");
}
x();

✅ Why It Works -

The close() function creates a new scope for j, which captures the value of i at the time of invocation.
This way, each setTimeout callback has a distinct value of j.


# Q2 🚀 Where is setTimeout Registered?

-> setTimeout itself is not executed immediately.
-> It is registered in the browser's Web API environment, which sets up a timer.
-> After the timer expires, the callback function is moved to the Message Queue.
-> The Event Loop moves it to the Call Stack when the stack is empty.


# Q3 What are the use cases of the following concepts, and how are they practically applied in JavaScript?

**Module Design Pattern**
**Currying**
**Memoization**
**Data Hiding & Encapsulation**
**setTimeout**


**🚀 1. Module Design Pattern-**

Use Case:

-> To organize code into small, manageable, and reusable parts.
-> To encapsulate implementation details and expose only necessary methods (like an API).
-> Helps in preventing global namespace pollution by creating private variables and functions.

Example:


const CounterModule = (function() {
    let count = 0;  // private variable

    function increment() {
        count++;
        console.log(count);
    }

    function decrement() {
        count--;
        console.log(count);
    }

    return {
        increment,
        decrement
    };
})();

CounterModule.increment(); // 1
CounterModule.decrement(); // 0


**🌀 2. Currying**

Use Case:

-> To transform a function with multiple arguments into a series of functions that take one argument at a time.


Example:

function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(1)(2)(3)); // 6


**⚡ 3. Memoization**

Use Case:

-> To optimize performance by caching the results of expensive function calls.
-> Reduces redundant calculations when the same inputs are encountered.
-> Commonly used in dynamic programming problems and recursive calculations.

Example:


function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key]; // Return cached result
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const factorial = memoize((n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
});

console.log(factorial(5)); // 120
console.log(factorial(5)); // 120 (from cache)



**🔒 4. Data Hiding & Encapsulation**

Use Case:

To restrict direct access to the internal state of an object.
Improves security and data integrity.
Allows controlled access through getter and setter methods.

Example:

function Person(name) {
    let _name = name; // Private variable

    this.getName = function() {
        return _name;
    };

    this.setName = function(newName) {
        _name = newName;
    };
}

const person = new Person("John");
console.log(person.getName()); // John
person.setName("Doe");
console.log(person.getName()); // Doe



**⏳ 5. setTimeout**

Use Case:

->To delay code execution by a specified time.
->Useful for asynchronous operations, like API calls, animations, or timed events.
->Helps in deferring execution without blocking the main thread.

Example:

console.log("Start");
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);
console.log("End");


<hr>

Watch Live On Youtube below:

<a href="https://www.youtube.com/watch?v=eBTBG4nda2A&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/eBTBG4nda2A/0.jpg" width="750"
alt="setTimeout + Closures Interview Question in JS Youtube Link"/></a>