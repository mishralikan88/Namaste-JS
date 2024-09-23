// Get and set attributes

// Selects the first anchor <a> tag in the DOM (in this case, the first link in the navigation menu)
const link = document.querySelector("a");

// Logs the value of the "href" attribute of the selected <a> tag, which is "#home"
// The slice(1) method removes the "#" symbol from the beginning of the string, so it logs just "home"
console.log(link.getAttribute("href").slice(1)); // Outputs "home" (removes the leading "#")

// Changes the "href" attribute of the selected <a> tag to point to "https://codprog.com"
// This means clicking on the link will now navigate to "https://codprog.com" instead of "#home"
link.setAttribute("href", "https://codprog.com");

// Logs the new value of the "href" attribute, which should now be "https://codprog.com"
// This confirms that the "href" was successfully changed
console.log(link.getAttribute("href")); // Outputs "https://codprog.com"

// Uncomment the below lines to interact with the input element of the todo form

// Selects the first <input> element inside the form with the class "form-todo"
// const inputElement = document.querySelector(".form-todo input");

// Logs the value of the "type" attribute of the selected <input> element
// It will show what type of input this is (e.g., "text", "password", etc.)
// console.log(inputElement.getAttribute("type")); // Outputs "text" if it's a text input