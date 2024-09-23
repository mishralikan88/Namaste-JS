// This JavaScript file interacts with clickEvent.html

// Select the button with id "one"
const firstButton = document.querySelector("#one");

// Add a click event listener to the button
firstButton.addEventListener("click", function (event) {
    console.log(event); // Logs the event object containing all event details
    console.log(this);  // Logs the element that triggered the event (in this case, the button)
});


// Explanation-

// JS Engine Execution:
// JavaScript runs line by line in the JS Engine, which is responsible for executing the code.
// In browsers, JavaScript runs with additional features provided by Web APIs.

// Web APIs:
// Web APIs are a set of features browsers provide (like handling DOM events, making network requests, etc.) that are not part of the core JavaScript language.
// Event Listener Process:

// When you attach an event listener (like click), JavaScript doesn't run it immediately.
// The browser waits for the user to perform the event (click, scroll, etc.).
// Once the event occurs, the browser detects it via the Web APIs and sends the information back to the JS Engine.

// Event Object:
// When the event is triggered (like clicking the button), the browser gives two things to the JS Engine:
// The callback function (the function inside addEventListener).
// An event object, which contains details about the event (e.g., which element was clicked, mouse position, key pressed, etc.).
// How Event Object Works:

// The event object is automatically passed to the callback function by the browser.
// Inside the callback, you can use the event object to get details about the event (like the type of event, target element, etc.).
// The this keyword in the callback refers to the element that triggered the event (in this case, the button).
// This explains the entire process of how JavaScript handles events, from attaching the event listener to receiving event details.


const allButtons = document.querySelectorAll(".my-buttons button");

for (let button of allButtons) {
    button.addEventListener("click", (e) => {
        console.log(e.currentTarget);
        console.log(e.target)
    });
}
// Explanation:

// Selecting Multiple Buttons:
// document.querySelectorAll(".my-buttons button"): This line selects all the buttons inside the container (the div with the class my-buttons). It returns a NodeList, which is like an array but specifically for DOM elements.
// allButtons now contains all the buttons you added (#one, #two, #three).

// Iterating Over Buttons:
// for (let button of allButtons): This for...of loop iterates over each button in the NodeList. For each button, it attaches a click event listener.
// Inside the loop, each button has its own event listener assigned.

// Adding Event Listener:
// button.addEventListener("click", (e) => {...}): For each button, you're adding a click event listener. The arrow function (e) => {...} is the callback function that will be executed when the button is clicked.
// The e parameter represents the event object, which contains all the information related to the click event.

// e.currentTarget:
// e.currentTarget: This property refers to the element that the event listener is attached to.
// In this case, since the listener is attached to each individual button, e.currentTarget will be the button that was clicked.
// So, when a button is clicked, console.log(e.currentTarget) will log the specific button that was clicked.