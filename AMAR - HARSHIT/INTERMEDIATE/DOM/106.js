// Change the styles of elements.

// Selects the first <h2> element inside a <div> with the class "headline"
// This looks for the <h2> that is inside the div with class "headline"
// In this case, it selects the "Manage your tasks" heading
const mainHeading = document.querySelector("div.headline h2");

// Logs the selected <h2> element itself to the console
// You can see the element and its properties here
console.log(mainHeading);

// Logs the style object of the selected element, which contains all the inline CSS styles
// It shows which inline styles are applied, even if they are not visible in the DOM
console.log(mainHeading.style); // Returns an object representing the element's styles

// Changes the background color of the selected <h2> element to blue
// This will immediately apply the background color change to the element
mainHeading.style.backgroundColor = "blue";

// Adds a green solid border of 20px to the selected <h2> element
// The <h2> will now have a thick green border around it
mainHeading.style.border = "20px solid green";