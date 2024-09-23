// Modify text - (using textContent and innerText)

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.innerText); // Manage your tasks
mainHeading.textContent = "This is something else";
console.log(mainHeading.textContent); // same as console.log(mainHeading.innerText);

// Differentiate between  innerText & textContent element attributes ?

// index.html - 

{/* <h2 id="main-heading">
  Manage your tasks <span style="display: none">Hello</span>
</h2> */}

// 1. textContent:
// Definition: textContent returns all the text inside the element, including hidden elements.
// Behavior:
// It will return the entire text inside the h2 element, including the text inside the <span> element, even though the span is hidden (because of display: none).
// It ignores styling, such as visibility or hidden elements.
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent); // Output: "Manage your tasks Hello"
// Here, textContent includes the hidden text "Hello" even though it's not visible on the page.

// 2. innerText:
// Definition: innerText only returns the visible text inside the element.
// Behavior:
// It will return the text inside the h2 element excluding the text inside the hidden <span> element, because innerText respects CSS rules like display: none and only returns the visible text.
// It considers the visible text and ignores hidden content.
// console.log(mainHeading.innerText); // Output: "Manage your tasks"
// Here, innerText does not include "Hello" because it is hidden with display: none.

// summary -

// textContent returns all the text, even hidden ones.
// innerText returns only visible text, considering CSS styling like visibility.