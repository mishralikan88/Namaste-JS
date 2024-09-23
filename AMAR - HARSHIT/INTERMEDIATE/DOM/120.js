// Introduction to Events:

// Events are actions or occurrences that happen in the browser, such as when a user clicks a button, hovers over an element, submits a form, or presses a key.
// Event handlers (or event listeners) allow JavaScript to react to these actions by executing specific code when an event occurs.
// The most common event types include click, keydown, submit, mouseover, etc.


// Click Event:

// The click event is triggered when a user clicks on an element. It is widely used in web development for interaction with buttons, links, and other clickable elements.
// You can add event handlers for the click event in several ways (inline, property-based, or using addEventListener()).




// This JavaScript code demonstrates three ways of handling the click event on a button. Here's a breakdown of each approach:




// Way 1: Inline Event Handler (Referencing index.html)
// In index.html, the event handler is added directly inside the HTML, like this:
{/* <button class="btn btn-headline" onclick="console.log('You clicked me!')">Learn More</button> */ }
// This method embeds JavaScript directly in the HTML, which can make the code harder to maintain as the project grows.




// Way 2: Assigning an Event Handler to the onclick Property
// This method assigns an event handler directly to the onclick property of the button element in JavaScript:
const btn = document.querySelector(".btn-headline"); // Select the button element
console.log(btn); // Logs the button element to the console
console.dir(btn); // Logs the properties of the button in a more detailed format
btn.onclick = function () { // Assign an event handler to the button's 'onclick' property
    console.log("you clicked me !!!! "); // Logs a message when the button is clicked
}
// In this approach, the button's onclick property is set to a function that logs a message when the button is clicked. The drawback is that only one event handler can be assigned to onclick, so it will overwrite any previous handler.




// Way 3: Using addEventListener
// The recommended way is to use the addEventListener() method. It allows you to attach multiple event listeners to a single element without overwriting existing ones.
function clickMe() {
    console.log("you clicked me !!!!!");
}
// Attach the 'click' event to the button using `addEventListener`
btn.addEventListener("click", clickMe); // Calls the `clickMe` function when the button is clicked
// Alternatively, you can pass an anonymous function:
btn.addEventListener("click", function () {
    console.log("you clicked me !!!!");
});
// Or you can use an arrow function:
btn.addEventListener("click", () => {
    console.log("arrow function !!!");
});