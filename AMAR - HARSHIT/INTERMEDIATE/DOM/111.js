// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Dom traversing</title>
//         <script src="./111.js" defer></script>
//     </head>
//     <body>
//         <div class="container">
//             <h1>My heading</h1>
//             <p>Some useful information</p>
//         </div>
//     </body>
// </html>


// We will use the HTML document `index2.html` with the current script file.

// DOM Tree Structure and Traversal

// Document (Root Node: type "Document")
//   |
//   └── <html> (Element Node)
//          |
//          ├── "\n" (Text Node - whitespace)
//          ├── <head> (Element Node)
//          │     |
//          │     ├── "\n" (Text Node - whitespace)
//          │     ├── <meta> (Element Node)
//          │     ├── "\n" (Text Node - whitespace)
//          │     ├── <title> (Element Node)
//          │     │     └── "Dom traversing" (Text Node)
//          │     ├── "\n" (Text Node - whitespace)
//          │     └── <script> (Element Node, defer attribute)
//          │           └── "./111.js" (Text Node)
//          │     ├── "\n" (Text Node - whitespace)
//          ├── "\n" (Text Node - whitespace)
//          └── <body> (Element Node)
//                |
//                ├── "\n" (Text Node - whitespace)
//                └── <div> (Element Node, class="container")
//                      |
//                      ├── "\n" (Text Node - whitespace)
//                      ├── <h1> (Element Node)
//                      │     └── "My heading" (Text Node)
//                      ├── "\n" (Text Node - whitespace)
//                      ├── <p> (Element Node)
//                      │     └── "Some useful information" (Text Node)
//                      ├── "\n" (Text Node - whitespace)
//                ├── "\n" (Text Node - whitespace)

// HTML Parsing and DOM Tree Construction:
// The browser reads the HTML document line-by-line, identifying elements, attributes, and text nodes (including whitespace).
// Each HTML element becomes a node in the DOM. The document is the root node, with child nodes including elements and text.

const rootNode = document.getRootNode();
console.log(rootNode);  // Accesses the root node of the DOM, which is the `document` object itself.

const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode); // Selects the first child of the document node, which is the <html> element.

// Accessing the child nodes of <html>:
console.log(htmlElementNode.childNodes);                // This logs the child nodes of <html>, which include: [head, text (whitespace), body]
console.log(typeof htmlElementNode.childNodes);         // Logs the type of `childNodes`, which is "object"
console.log(Array.isArray(htmlElementNode.childNodes)); // Logs whether `childNodes` is an array. It is not a true array but an array-like object (NodeList).

const headElementNode = htmlElementNode.childNodes[0];  // Selects the first child of <html>, which is the <head> element.
const textNode1 = htmlElementNode.childNodes[1];        // Selects the second child of <html>, which is a text node (whitespace between <head> and <body>).
const bodyElementNode = htmlElementNode.childNodes[2];  // Selects the third child of <html>, which is the <body> element.
console.log(headElementNode.childNodes); // Logs the child nodes of <head>, which include: [text (whitespace), title, text (whitespace), script, text (whitespace)].

// Parent Node Access:
// Accesses the parent node of <head> and <body>.
console.log("Parent of <head>:", headElementNode.parentNode); // Logs the <html> element
console.log("Parent of <body>:", bodyElementNode.parentNode); // Logs the <html> element

// Sibling Node Access:
// Accesses sibling nodes of <head> and <body> and shows differences between element nodes and text nodes.
const htmlElementNode1 = document.documentElement;       // <html> element
const headElementNode1 = htmlElementNode1.childNodes[0]; // <head> element
const bodyElementNode1 = htmlElementNode1.childNodes[2]; // <body> element
console.log(headElementNode1.nextSibling);               // Logs the text node (whitespace) immediately after <head>
console.log(bodyElementNode1.previousSibling, typeof bodyElementNode1.previousSibling); // Logs the text node (whitespace) before <body>
console.log(headElementNode1.nextSibling.nextSibling);   // Logs the <body> element
console.log(headElementNode1.nextElementSibling);        // Logs the <body> element, skipping the text node (whitespace)

// Manipulating DOM Elements:
const h1 = document.querySelector("h1"); // Selects the first <h1> element in the document
const body = h1.parentNode.parentNode;   // Accesses the parent of the <h1> element, which is the <div> element. Accesses the parent of the <div>, which is the <body> element
// Applies styles to the <body> element
body.style.color = "#efefef";        // Sets the text color of the body to light gray
body.style.backgroundColor = "#333"; // Sets the background color of the body to dark gray

// Accessing <head> and <title> elements:
const head = document.querySelector("head"); // Selects the <head> element
console.log(head); // Logs the <head> section, showing <title> and <script>

// Accessing <title> child nodes:
const title = head.querySelector("title");
console.log(title.childNodes); // Logs the child nodes of <title>, which include the text node "Dom traversing"

// Accessing Container Element and Its Children:
const container = document.querySelector(".container");   // Selects the element with the class "container"
console.log(container.childNodes);  // Logs all child nodes of the <div class="container">, including element nodes and text nodes (whitespace)
console.log(container.children);    // Logs array of only the child elements of the <div class="container">, ignoring text nodes and whitespace.

// How Browsers Process & Render HTML Documents ?

// HTML Parsing:
// The browser reads the HTML document line-by-line, parsing it to understand the structure.
// It identifies elements, attributes, and text content (including spaces and new lines) as it processes the document.

// DOM Tree Construction:
// Each HTML element becomes a node in the DOM (Document Object Model).
// The DOM tree starts with the document node as the root, and includes all elements and text nodes.
// Elements are represented as element nodes, and text within these elements is represented as text nodes.
// The browser constructs the DOM tree by creating nodes for each HTML element and text content.

// CSSOM Tree Construction:
// The browser reads the CSS files and inline styles to create the CSSOM (CSS Object Model) tree.
// The CSSOM tree contains information about styles and how they should be applied to the HTML elements.
// This tree is used in conjunction with the DOM to apply styles and determine the appearance and layout of elements.

// Rendering and Layout:
// The browser combines the DOM and CSSOM trees to calculate the layout and visual representation of the page.
// This step involves determining the size and position of each element based on CSS rules and the document structure.
// The combined information from the DOM and CSSOM creates a visual representation, which is rendered on the screen.

// JavaScript Execution:
// JavaScript code runs in the browser and can modify the DOM and CSSOM.
// Changes made by JavaScript can affect the layout and styling of the page, which may require recalculating and updating the page visually.
// JavaScript can dynamically alter content, structure, and styles, impacting how the page is displayed.

// Reflow and Repaint:
// When changes occur in the DOM or CSSOM, the browser performs a reflow (layout recalculation) and repaint (visual update).
// Reflow recalculates the size and position of elements based on changes, while repaint updates the visuals without altering layout.
// This process ensures that the page is accurately displayed based on the latest DOM and CSSOM information.
// The result is a styled, interactive webpage that reflects any modifications made by JavaScript or CSS changes.