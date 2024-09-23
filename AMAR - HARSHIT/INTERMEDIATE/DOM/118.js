// static vs live list


// Static List Example -

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Static Todo List</title>
// </head>
// <body>
//     <h2>Static Todo List</h2>
//     <ul id="static-list">
//         <li>Task 1</li>
//         <li>Task 2</li>
//         <li>Task 3</li>
//     </ul>
// </body>
// </html>


// Live List Example -

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Live Todo List</title>
// </head>
// <body>
//     <h2>Live Todo List</h2>
//     <form id="todo-form">
//         <input type="text" id="todo-input" placeholder="Add Todo" required />
//         <input type="submit" value="Add Todo" />
//     </form>
//     <ul id="live-list"></ul>

// <script>
//     // Get the form and input
//     const todoForm = document.getElementById('todo-form');
//     const todoInput = document.getElementById('todo-input');
//     const liveList = document.getElementById('live-list');

// When the form is submitted
//     todoForm.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent page refresh

//         // Create a new list item
//         const newItem = document.createElement('li');
//         newItem.textContent = todoInput.value; // Set the text

//         // Add the new item to the list
//         liveList.appendChild(newItem);
//         // Clear the input field
//         todoInput.value = '';
//     });
// </script>
// </body>
// </html>

// Key Differences -

// Static List: The items are predefined in the HTML and cannot be changed without editing the code.
// Live List: Users can enter new items, which are created and added to the list dynamically. This allows for interaction and updates without reloading the page.


// Static List
// Definition: Fixed items defined in HTML.
// Content: Unchangeable without editing the code.
// Interaction: No user input; purely display.
// Use Case: Best for displaying static information.

// Live List
// Definition: Items created and modified via JavaScript.
// Content: Dynamic; users can add/remove items.
// Interaction: Interactive; responds to user actions.
// Use Case: Ideal for applications needing real-time updates (e.g., todo lists).