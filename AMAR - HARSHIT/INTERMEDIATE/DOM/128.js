// This JavaScript file interacts with event-bubbling.html document.

// 1. Event Propagation
// Event propagation defines how events move through the DOM (Document Object Model). 
// There are two phases of event propagation.

// Capturing Phase (Trickling): The event starts from the root of the DOM (e.g., document) and moves downward to the target element (the element that triggered the event). This phase is also called "trickling" because it trickles down to the target.

// Bubbling Phase: Once the event reaches the target element, it starts moving back up the DOM to its ancestors (e.g., parent, grandparent). This phase is called "bubbling" because the event bubbles up from the target to its ancestors.

// Example Scenario of Propagation:
// Let’s say you have nested elements: A grandparent element contains a parent, which contains a child element.

// <div class="grandparent">
//   Grandparent
//   <div class="parent">
//     Parent
//     <div class="child">Child</div>
//   </div>
// </div>

// If a click event occurs on the child element, here’s how the event moves:

// 1. Capturing Phase: The event travels from document → grandparent → parent → child.
// 2. Bubbling Phase: After reaching the target (child), the event bubbles up: child → parent → grandparent → document.



// 1. Event Capturing (Trickling)
// In the capturing phase, the event travels from the outermost element down to the target element. To listen to an event during this phase, you need to pass a third argument as true in addEventListener.


const child = document.querySelector(".child");
child.addEventListener("click", () => {
    console.log("Capture: child");
}, true);  // Capture phase

// In this code, the event listener on the child element listens during the capturing phase. 
// It will catch the event as it "trickles down" from the document to the child.

// Example:

document.body.addEventListener("click", () => {
    console.log("Capture: document.body");
}, true);
grandparent.addEventListener("click", () => {
    console.log("Capture: grandparent");
}, true);
parent.addEventListener("click", () => {
    console.log("Capture: parent");
}, true);
child.addEventListener("click", () => {
    console.log("Capture: child");
}, true);

// If you click on the child element, the output in the console would be:

// Capture: document.body
// Capture: grandparent
// Capture: parent
// Capture: child

// This shows the event trickling down through each element.



// 2. Event Bubbling
// In event bubbling, the event starts at the target element and "bubbles up" through its ancestors. By default, most events in JavaScript use bubbling unless you specify otherwise.

// Here’s an example:

// const child = document.querySelector(".child");
// child.addEventListener("click", () => {
//   console.log("Bubble: child");
// });

// This event listener captures the event as it bubbles up after the event has reached the target (child).
// Example:

document.body.addEventListener("click", () => {
    console.log("Bubble: document.body");
});
grandparent.addEventListener("click", () => {
    console.log("Bubble: grandparent");
});
parent.addEventListener("click", () => {
    console.log("Bubble: parent");
});
child.addEventListener("click", () => {
    console.log("Bubble: child");
});

// If you click on the child element, the output in the console would be:

// Bubble: child
// Bubble: parent
// Bubble: grandparent
// Bubble: document.body

// This shows the event bubbling up through each element.





// Difference Between Capturing and Bubbling

// Capturing: The event moves from outer elements to the target element.
// Bubbling: The event moves from the target element to outer elements.

// Important Points:
// By default, event listeners are in the bubbling phase unless you pass true to the third argument in addEventListener.
// Both capturing and bubbling phases can be listened to by attaching event listeners.



// Event.stopPropagation()
// Sometimes you want to stop an event from bubbling up or capturing down through the DOM. You can use event.stopPropagation() to prevent this behavior.

// Example:

child.addEventListener("click", (e) => {
    e.stopPropagation();  // Prevents the event from bubbling up
    console.log("Child clicked, propagation stopped.");
});

// In this example, if the child is clicked, the event will be handled by the child element only, and it won’t propagate to the parent or grandparent.




// Event.preventDefault()
// This method prevents the default action associated with an event from happening. For example, in a form, the default behavior of a submit button is to refresh the page. You can stop this action using preventDefault().

// Example:

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();  // Prevents form submission
    console.log("Form submission prevented");
});





// Event Delegation -

// Event delegation is a technique where you attach a single event listener to a parent element to manage events for its children. This approach is efficient because it reduces the number of event listeners attached to individual child elements.

// Instead of adding an event listener to each child (which can be numerous), you add one to the parent and use the event.target to determine which child was clicked.

// Example:

grandparent.addEventListener("click", (e) => {
    console.log("Event Target:", e.target);  // Logs the exact element that was clicked
});

// If you click on the child element, e.target will point to the .child element. This allows the parent (grandparent) to manage events for its children.


// Benefits of Event Delegation:

// Reduces memory usage: You don't need to attach listeners to every child.
// Dynamically handles new elements: Even if a new child is added, the parent will still handle events without requiring a new event listener.;




// summary -

// Event Capturing: Event travels from the root down to the target (outer to inner).
// Event Bubbling: Event starts at the target and bubbles up (inner to outer).
// Event Delegation: A parent element handles events for its children using the e.target.
// Event.stopPropagation(): Stops the event from propagating further.
// Event.preventDefault(): Prevents the default action associated with an event.