// Script Tag Placement in HTML


// Approach 1: <script> in <head>
// Problem: When the browser encounters the <script> tag, it stops parsing the HTML to load and execute the script. If the script tries to access elements that are not yet parsed (e.g., elements in the <body>), it can cause errors because those elements aren’t available yet.
// Issue: This can lead to errors if the script tries to interact with elements that haven’t been loaded yet.


// Approach 2: <script> Before </body>
// Advantage: Placing the <script> tag just before the closing </body> tag ensures that all HTML elements are parsed before the script runs, avoiding errors.
// Drawback: Parsing the HTML and loading the script happen sequentially, which can make the page load slower because these operations are done one after the other.


// Approach 3: <script async>
// How It Works:
// The browser continues parsing the HTML while it loads the script in parallel.
// As soon as the script is loaded, it stops parsing and executes the script.
// Potential Issue: If the script depends on elements that haven’t been parsed yet, it might still cause errors because the script may execute before the HTML is fully parsed.


// Approach 4: <script defer>
// How It Works:
// The browser continues parsing the HTML while it loads the script in parallel.
// The script is executed only after the HTML parsing is complete.
// Advantage: This approach ensures that the script runs only after the entire HTML document is parsed, avoiding errors and optimizing loading times.


// console.dir(document); // object representation


// 1. HTML Document -
// Definition: The raw code written in HTML to define the structure and content of a web page.The code is static
// Example:

// <!DOCTYPE html>
// <html>
// <head>
//   <title>My Page</title>
// </head>
// <body>
//   <h1>Welcome!</h1>
//   <p>This is a paragraph.</p>
// </body>
// </html>

// 2. Document Object Model (DOM)
// Definition: A structured, dynamic representation of the HTML document created by the browser. It organizes the HTML as a tree of objects, allowing JavaScript to interact with and manipulate the page.

// Document (Root)
// |
// |-- html
//     |
//     |-- head 
//     |   |
//     |   |-- title ("My Page")
//     |
//     |-- body
//         |
//         |-- h1 ("Welcome!")
//         |-- p ("This is a paragraph.")



// Explanation-

// Document : The root object representing the entire HTML document.

// Object: (Represents each HTML element, attribute, and text as objects in the DOM tree)
// Description: Child of the document object. Represents the <html> element.
// head Object:
// Description: Child of the html object. Represents the <head> section of the HTML document.
// title Object:
// Description: Child of the head object. Represents the <title> element with its text content.
// body Object:
// Description: Child of the html object. Represents the <body> section of the HTML document.
// h1 Object:
// Description: Child of the body object. Represents the <h1> element with its text content.
// p Object:
// Description: Child of the body object. Represents the <p> element with its text content.

// Model : The hierarchical, tree-like structure that organizes these objects for interaction and manipulation.


// HTML Document: The static code defining the web page's content and structure.
// DOM: The live, interactive representation of the HTML document, structured as a tree of objects. It allows JavaScript to interact with and modify the web page.

// DOM Components:
// Nodes: Each HTML element (e.g., <h1>, <p>) becomes a node in the DOM tree.
// Attributes: Properties of elements (e.g., id, class) are included.
// Text Nodes: Text inside HTML elements is represented as text nodes.

// "dynamic representation" in the context of the DOM refers to how the Document Object Model allows the HTML document to be modified and interacted with after it has been initially loaded. Here’s why it's considered dynamic

// 1. Dynamic Updates:
// Live Representation: The DOM is not a static snapshot of the HTML. it's a live, up-to-date representation of the document. This means that any changes you make through JavaScript are immediately reflected in the DOM and, therefore, on the web page.
// Example: If you use JavaScript to change the text of an element or add new elements, those changes are immediately visible to the user. For instance, if you have:
document.querySelector('h1').textContent = 'New Heading';
// The <h1> element on the page will instantly update to display "New Heading."


// 2. Interactive Manipulation:
// Programmatic Access: JavaScript can access and manipulate the DOM dynamically. You can add, remove, or modify elements, attributes, and text at runtime.
// Example: You can create new elements, change existing elements' styles, or even remove elements altogether based on user interactions or other events.
// Create and add a new <div> element to the body
let newDiv = document.createElement('div');
newDiv.textContent = 'A new div!';
document.body.appendChild(newDiv);


// 3. Event Handling:
// Event-Driven Changes: The DOM allows you to respond to user actions or other events. For example, you can set up event listeners to react to clicks, form submissions, or other interactions, which can then modify the DOM based on those events.
// Example: If you have a button that, when clicked, changes the color of a paragraph, the DOM will dynamically update to reflect this change.

document.querySelector('button').addEventListener('click', function () {
  document.querySelector('p').style.color = 'blue';
});

// 4. Asynchronous Updates:
// AJAX and Fetch: Modern web applications often use asynchronous techniques to update the DOM based on data received from a server without reloading the entire page. This allows parts of the page to change dynamically as new data arrives.

// Example: Using the Fetch API to load new content and update the DOM:

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.querySelector('#info').textContent = data.info;
  });

// Relationship Between window and document


// window Object:

// The window object is the global context for JavaScript code running in the browser. It provides a way to access the document object among many other things.
// document Object:

// The document object is a property of the window object. It represents the web page's content and allows interaction with the HTML elements within that page.

// Window (Global Object)
// |
// |-- document (Represents the current HTML document)
//     |
//     |-- (HTML elements, attributes, text nodes)

// Directly accessing document (implicitly through window)
let heading = document.querySelector('h1');

// Explicitly accessing document through window
let headingExplicit = window.document.querySelector('h1');


// Display an alert dialog
// window.alert('Hello, World!');

// Navigate to a new URL as soon as user clicks on ok.
// window.location.href = 'https://www.example.com';
// console.log(window)

// Document Object Overview
// The document object is part of the DOM (Document Object Model) and represents the entire HTML document loaded in the browser. It provides a range of properties and methods to interact with and manipulate the content and structure of the document.
// console.log(window.document)
// console.log(document)

// ================ Document Properties ==========

// document.documentElement -

// Description: This represents the root element of the document, which is the < html > element in an HTML document.
// let htmlElement = document.documentElement; // Returns the <html> element
// console.log(htmlElement) // html
// Explanation:
// The documentElement property always returns the root element of the document.In HTML documents, this is the < html > element, which contains the entire structure of the page.This element is the highest - level element in the DOM tree, and it acts as the parent of the < head > and < body > tags.
// You can access and manipulate the < html > element through this property.For example, you could change its attributes, styles, or even its content.

// 1. Changing the Attributes of the <html> Element

// You can modify the attributes of the <html> element, such as its lang attribute, using JavaScript:
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Manipulate HTML Element</title>
//     <script>
//       document.documentElement.setAttribute("lang", "fr"); // Changes lang to "fr" (French)
//     </script>
//   </head>
//   <body>
//     <p>Check the language attribute of the HTML element.</p>
//   </body>
// </html>
// Before: <html lang="en">
// After: <html lang="fr"></html>

// 2. Modifying Styles of the <html> Element

// You can also manipulate the styles of the <html> element using JavaScript:
// < !DOCTYPE html >
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Manipulate HTML Element</title>
//       <script>
//         // Change the background color of the whole page
//         document.documentElement.style.backgroundColor = "lightblue";
//         // Change the font size of all text in the document
//         document.documentElement.style.fontSize = "20px";
//       </script>
//     </head>
//     <body>
//       <p>This is a paragraph with a larger font size and a light blue background.</p>
//     </body>
//   </html>

// 3. Changing the Content of the <html> Element (Uncommon)

// Though it's rare to manipulate the content of the <html> element itself, you can still replace the content of the entire page using innerHTML:

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Manipulate HTML Element</title>
//     <script>
//       // Replace the entire content of the HTML element
//       document.documentElement.innerHTML = `
//         <head>
//           <title>New Page</title>
//         </head>
//         <body>
//           <h1>This is a completely new page!</h1>
//         </body>
//       `;
//     </script>
//   </head>
//   <body>
//     <p>Original content will be replaced.</p>
//   </body>
// </html>
// This example will replace everything inside the <html> tag, including the <head> and <body> elements.


// 4. Adding or Removing Classes on the <html> Element

// You can add or remove CSS classes from the <html> element to change its appearance:
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Manipulate HTML Element</title>
//     <style>
//       .dark-mode {
//         background-color: black;
//         color: white;
//       }
//     </style>
//     <script>
//       // Add the "dark-mode" class to the HTML element
//       document.documentElement.classList.add("dark-mode");
//     </script>
//   </head>
//   <body>
//     <p>This page is now in dark mode!</p>
//   </body>
// </html>
// In this case, adding the class dark-mode to the <html> element changes the page's appearance.


// document.head
// Description: Represents the <head> element of the document.
let headElement = document.head; // <head>


// document.body
// Description: Represents the <body> element of the document.
let bodyElement = document.body; // <body>


// document.title
// Description: Gets or sets the title of the document (the content of the <title> element).
let pageTitle = document.title; // "My Page"
document.title = 'New Title'; // Sets the title to "New Title"


// document.URL
// Description: Returns the complete URL of the document.
let currentURL = document.URL; // "https://www.example.com"


// document.domain
// Description: Returns the domain of the document.
let domain = document.domain; // "example.com"

// document.cookie
// Description: Gets or sets cookies associated with the document.
let cookies = document.cookie; // "name=value; expires=date; path=/"


// ====================== Document Methods ====================

// document.getElementById(id)
// Description: Returns the element with the specified id attribute.
let element = document.getElementById('myId'); // <div id="myId">

// document.querySelector(selector)
// Description: Returns the first element that matches the specified CSS selector.
let firstParagraph = document.querySelector('p'); // <p>This is a paragraph.</p>

// document.querySelectorAll(selector)
// Description: Returns a NodeList of all elements that match the specified CSS selector.
let allDivs = document.querySelectorAll('div'); // NodeList of all <div> elements

// document.getElementsByClassName(className)
// Description: Returns a live HTMLCollection of elements with the specified class name.
// let elements = document.getElementsByClassName('myClass'); // HTMLCollection of elements with class "myClass"

// document.getElementsByTagName(tagName)
// Description: Returns a live HTMLCollection of elements with the specified tag name.
let paragraphs = document.getElementsByTagName('p'); // HTMLCollection of all <p> elements

// document.createElement(tagName)
// Description: Creates a new HTML element of the specified type.
// let newDiv = document.createElement('div'); // <div></div>

// document.createTextNode(text)
// Description: Creates a new text node with the specified text.
let textNode = document.createTextNode('Hello, World!'); // Text node containing "Hello, World!"

// document.appendChild(node)
// Description: Adds a new child node to the end of the document or a specified element.
let newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';
document.body.appendChild(newParagraph); // Adds the new <p> element to the <body>

// document.removeChild(node)
// Description: Removes a child node from the document.
let elementToRemove = document.getElementById('removeMe');
document.body.removeChild(elementToRemove); // Removes the <div id="removeMe">

// document.replaceChild(newChild, oldChild)
// Description: Replaces an old child node with a new one.
let oldChild = document.getElementById('old');
let newChild = document.createElement('div');
document.body.replaceChild(newChild, oldChild); // Replaces oldChild with newChild

// document.write(content)
// Description: Writes a string of text directly to the document (not recommended for dynamic updates).
document.write('Hello, World!'); // Writes "Hello, World!" to the document


// ================= Event Handling ================

// document.addEventListener(event, callback)
// Description: Attaches an event listener to the document for the specified event type.

document.addEventListener('click', function () {
  console.log('Document was clicked!');
});


// document.removeEventListener(event, callback)
// Description: Removes an event listener from the document.

function handleClick() {
  console.log('Document was clicked!');
}
document.addEventListener('click', handleClick);
document.removeEventListener('click', handleClick);



// ========= Document Traversal and Manipulation ===========

document.getRootNode()
// Description: Returns the root node of the document or shadow tree.
let rootNode = document.getRootNode(); // Returns the document or shadow root


document.getElementsByName(name)
// Description: Returns a NodeList of elements with the specified name attribute.
let elements = document.getElementsByName('myName'); // NodeList of elements with name "myName"


// Conclusion summary -

// document Properties: Allow access to various parts of the HTML document, such as the <html>, <head>, and <body> elements, as well as document metadata like the title, URL, and cookies.

// document Methods: Provide functionality to create, access, modify, and remove elements and text nodes within the HTML document.

// Event Handling: Methods for listening to and responding to events that occur in the document.

// Traversal and Manipulation: Methods to navigate and manipulate the structure of the document.
// The document object is a central part of the DOM, enabling developers to dynamically interact with and modify the content and structure of web pages through JavaScript.

// Note - Include all details later