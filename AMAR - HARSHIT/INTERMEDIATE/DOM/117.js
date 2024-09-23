// Some old methods to support older versions of Internet Explorer (IE)
// These are still supported by modern browsers but considered older syntax:
// appendChild, insertBefore, replaceChild, removeChild




// Example of appendChild -

// 1. Select the <ul> element
const ul = document.querySelector(".todo-list");

// 2. Create a new <li> element
const newLi = document.createElement("li");
newLi.textContent = "New Todo";

// 3. Append the new <li> to the end of the <ul> list
ul.appendChild(newLi);

// Output: The new <li> "New Todo" will be added to the end of the <ul>.
// <ul>
//   <li>Existing Todo 1</li>
//   <li>Existing Todo 2</li>
//   <li>New Todo</li>
// </ul>




// Example of insertBefore -

// 1. Select the <ul> element
// const ul = document.querySelector(".todo-list");

// 2. Create a new <li> element
const newLi = document.createElement("li");
newLi.textContent = "New Todo";

// 3. Select the reference node (the element before which the new one will be inserted)
const referenceNode = document.querySelector(".todo-list li"); // First <li> item

// 4. Insert the new <li> before the reference node (first <li>)
ul.insertBefore(newLi, referenceNode);

// Output: "New Todo" will be added before the first existing <li>.
// <ul>
//   <li>New Todo</li>
//   <li>Existing Todo 1</li>
//   <li>Existing Todo 2</li>
// </ul>




// Example of replaceChild -

// 1. Select the <ul> element
// const ul = document.querySelector(".todo-list");

// 2. Create a new <li> element
const newLi = document.createElement("li");
newLi.textContent = "Replaced Todo";

// 3. Select the existing <li> element to be replaced
const oldLi = document.querySelector(".todo-list li"); // First <li> item

// 4. Replace the old <li> with the new one
ul.replaceChild(newLi, oldLi);

// Output: The first <li> item will be replaced with "Replaced Todo".
// <ul>
//   <li>Replaced Todo</li>
//   <li>Existing Todo 2</li>
// </ul>




// Example of removeChild -

// 1. Select the <ul> element
// const ul = document.querySelector(".todo-list");

// 2. Select the <li> element to be removed
const liToRemove = document.querySelector(".todo-list li"); // First <li> item

// 3. Remove the selected <li> from the <ul>
ul.removeChild(liToRemove);

// Output: The first <li> will be removed.
// <ul>
//   <li>Existing Todo 2</li>
// </ul>