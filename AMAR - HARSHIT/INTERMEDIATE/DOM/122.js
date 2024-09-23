// This JavaScript file interacts with clickEvent.html

// Select all buttons inside the 'my-buttons' div
// This returns a NodeList of button elements
const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons); // Logs the NodeList of buttons

// Option 1: Using 'for...of' loop to add click event listener to each button
// In this loop, we iterate over each button and attach a click event listener
// 'this' inside the event listener refers to the button that was clicked
// for (let button of allButtons) {
//     button.addEventListener("click", function() {
//         console.log(this); // Logs the specific button element that was clicked
//     });
// }

// Option 2: Using traditional 'for' loop
// This method works similarly to the 'for...of' loop, but uses an index to access each button
// for (let i = 0; i < allButtons.length; i++) {
//     allButtons[i].addEventListener("click", function() {
//         console.log(this); // Logs the specific button element that was clicked
//     });
// }

// Option 3: Using forEach method
// The NodeList returned by querySelectorAll allows the use of forEach
// This is a more modern and readable approach compared to the traditional loops
// It iterates over each button and adds a click event listener
// allButtons.forEach(function(button) {
//     button.addEventListener("click", function() {
//         console.log(this); // Logs the specific button element that was clicked
//     });
// });

