// This JavaScript file interacts with clickEvent.html

console.log("script start !!!!!")

const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let num = 0;
        for (let i = 0; i <= 1000000000; i++) {
            num += i;
        }
        console.log(e.currentTarget.textContent, num);
    })
})

let outerVar = 0;
for (let i = 0; i <= 100000000; i++) {
    outerVar += i;
}

console.log("value of outer variable is ", outerVar);

console.log("script end !!!!!")



// Execution Flow of the JS Engine -


// Logs "script start !!!!!".

// Registers click listeners on buttons (but does not execute the code inside the listener yet).

// Runs the first for loop (100 million iterations) and logs the result of outerVar.

// Logs "script end !!!!!".

// When the user clicks a button, a new task is placed in the event queue. Once the call stack is empty, the event loop picks this task and executes the button's click callback.

// The for loop inside the event listener runs (simulating a delay), and the button's text and the calculated number are logged.



// Event Loop and Web API Concepts-


// Call Stack: JavaScript is single-threaded, meaning it runs one operation at a time, using a call stack to keep track of function calls. Synchronous code is executed in the order it appears, and any async events (like clicks or timers) are deferred.

// Web API: When an event listener is registered (like the click event), it's handled by the Web API provided by the browser. The Web API holds these events until they're triggered by user actions (e.g., a button click).

// Event Queue: Once the event occurs, the associated callback is placed in the event queue. The event loop then picks up the event from the queue once the call stack is empty and executes it.

// Blocking: The heavy loops in the code are synchronous and block the event loop. So while the for loops are running, no other code (including event listeners) can be executed.