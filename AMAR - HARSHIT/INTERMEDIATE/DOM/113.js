const todoList = document.querySelector(".todo-list"); // Select the 'todo-list' element from the page.
console.log(todoList.innerHTML);  // Logs the current innerHTML of the 'todo-list' (for example, it might contain the initial <li> elements)
// Output (depends on the HTML): "<li><span class="text">Do this do that</span><div class="todo-buttons">...</div></li>"

// Adding a new list item directly using innerHTML (this will replace the existing content).
// todoList.innerHTML = "<li>New Todo 2 </li>"; 
// This will completely replace the entire content of 'todo-list' with "<li>New Todo 2</li>"

// Adding more list items by appending with += (without replacing the previous content)
todoList.innerHTML += "<li>New Todo </li>";
todoList.innerHTML += "<li>teach students </li>";

// After these two lines, the 'todo-list' will contain the new items along with the existing ones.
// Output: 
// <ul class="todo-list">
//   <li>New Todo </li>
//   <li>teach students </li>
// </ul>

// Note: Using innerHTML can cause performance issues when adding many elements individually because it re-renders the entire content of the container each time. This should be avoided in scenarios where frequent, small updates are made to the DOM.

// It's good to use innerHTML when You are adding or replacing a large chunk of HTML content at once.

// You should avoid innerHTML when Performance is a concern (e.g., adding many elements or updating frequently).

// Now, trying to use `insertAdjacentElement` to add an element:
todoList.insertAdjacentElement("afterbegin", '<li>Hi</li>');
// Output: TypeError: Failed to execute 'insertAdjacentElement' on 'Element': The second argument is not a Node.
// Reason: 'insertAdjacentElement' expects a DOM element (a Node object), not a string of HTML.

// If you want to insert HTML using this method, you should use 'insertAdjacentHTML' instead.
todoList.insertAdjacentHTML("afterbegin", '<li>Hi</li>');
// Output: This will successfully insert '<li>Hi</li>' at the beginning of the 'todo-list' element.
// The final result will be:
// <ul class="todo-list">
//   <li>Hi</li>
//   <li>New Todo </li>
//   <li>teach students </li>
// </ul>