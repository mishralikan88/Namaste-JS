// This JavaScript file interacts with little-demo.html document

// Select the button element in the document
const mainButton = document.querySelector("button");
// Select the body element of the document
const body = document.body;
// Select the span element that displays the current color
const currentColor = document.querySelector(".current-color");

// Function to generate a random RGB color
function randomColorGenerator() {
    // Generate a random integer between 0 and 255 for red
    const red = Math.floor(Math.random() * 256);
    // Generate a random integer between 0 and 255 for green
    const green = Math.floor(Math.random() * 256);
    // Generate a random integer between 0 and 255 for blue
    const blue = Math.floor(Math.random() * 256);
    // Create an RGB color string using the generated values
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    // Return the random color string
    return randomColor;
}

// Add a click event listener to the button
mainButton.addEventListener("click", () => {
    // Call the random color generator function to get a new color
    const randomColor = randomColorGenerator();
    // Log the current color element to the console (for debugging)
    console.log(currentColor);
    // Change the background color of the body to the new random color
    body.style.backgroundColor = randomColor;
    // Update the text content of the span to display the new color
    currentColor.textContent = randomColor;
});


// Summary of Code Functionality:

// The code selects necessary HTML elements (button, body, and span).

// It defines a function to generate a random RGB color.

// It sets up an event listener on the button, which:
// Generates a random color when clicked.

// Changes the body's background color to that random color.

// Updates the displayed color in the <span> element.