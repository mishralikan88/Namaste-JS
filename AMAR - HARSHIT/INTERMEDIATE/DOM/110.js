// innerHTML: 
// innerHTML property allows us to get or set the HTML content inside an element.

// Selects the first element with the class "headline"
const headline = document.querySelector(".headline");

// Logs the current inner HTML of the .headline element
console.log(headline.innerHTML); // Outputs the existing HTML content inside the .headline div

// Sets new HTML content inside the .headline element, replacing any existing content
headline.innerHTML = "<h1>Inner html changed</h1>"; // Replaces content with <h1> tag

// Appends additional HTML content to the existing inner HTML
headline.innerHTML += "<button class='btn'>Learn More</button>";
// += is used to append. Adds a button element without removing the <h1>

// Logs the updated inner HTML of the .headline element
console.log(headline.innerHTML); // Outputs the new HTML content with <h1> and <button>

// Check the UI: After running this code, the headline section will now display an <h1> and a "Learn More" button.