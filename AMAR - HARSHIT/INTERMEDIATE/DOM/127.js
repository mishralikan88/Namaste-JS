// This JavaScript file interacts with index.html document

// Keypress event: This section sets up an event listener on the body to detect key presses.
// It captures any key that is pressed and logs the key's value to the console.

const body = document.body;  // Selects the body element of the document
body.addEventListener("keypress", (e) => {  // Attaches a keypress event listener to the body
    console.log(e.key);  // Logs the key that was pressed to the console
});


// Mouseover and mouseleave events: This section sets up event listeners for mouse interactions.
// It detects when the user hovers over the button and when the mouse leaves the button

const mainButton = document.querySelector(".btn-headline");  // Selects the button element with the class "btn-headline"
console.log(mainButton);  // Logs the button element to confirm it's selected correctly

mainButton.addEventListener("mouseover", () => {  // Attaches a mouseover event listener to the button
    console.log("mouseover event occurred!!!");  // Logs a message when the mouse hovers over the button
});

mainButton.addEventListener("mouseleave", () => {  // Attaches a mouseleave event listener to the button
    console.log("mouseleave event occurred!!!");  // Logs a message when the mouse leaves the button
});