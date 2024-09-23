// This JavaScript file interacts with clickEvent.html


const allButtons = document.querySelectorAll(".my-buttons button")
// console.log(allButtons.length);

allButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        // console.log(e.target);
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "#333";
    })
})



// This JavaScript code is a simple example of handling a click event on multiple buttons and changing their style when clicked.

// Step 1: The document.querySelectorAll(".my-buttons button") method selects all the button elements that are inside any element with the class "my-buttons".
// The result is a NodeList containing all those buttons, which is assigned to the allButtons variable.
// We can imagine allButtons as a collection of buttons that will be looped over.
// const allButtons = document.querySelectorAll(".my-buttons button");

// Step 2: This line loops over each button in the allButtons NodeList.
// allButtons.forEach(button => {
//     button.addEventListener("click", (e) => {
//         e.target.style.backgroundColor = "yellow";
//         e.target.style.color = "#333";
//     });
// });
// forEach is a method that allows you to run a function on every element in the collection.
// In this case, we are adding an event listener to each button for the "click" event.


// Step 3: The addEventListener("click", ...) method listens for a click event on the button.
// When the button is clicked, the anonymous function (e) => { ... } is executed.
// The event object e is automatically passed to the callback function when the button is clicked. This object contains information about the event, including the element that triggered the event.

// Step 4: Inside the event listener, the following two lines change the style of the clicked button:
// e.target refers to the button that was clicked (the target of the event).
// e.target.style.backgroundColor = "yellow"; changes the background color of the clicked button to yellow.
// e.target.style.color = "#333"; changes the text color of the button to a dark gray (hex #333).



// Key Concepts:
// Event Listener: The addEventListener method attaches a function to run when an event (like a click) occurs on the button.
// Event Object (e): The event object provides information about the event, such as target, which refers to the HTML element that triggered the event.
// Manipulating Styles: e.target.style allows you to dynamically modify the CSS styles of the clicked button.


// Output:

// When you click any button inside the .my-buttons container, the button’s background will turn yellow and the text color will change to a dark gray.