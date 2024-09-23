// document.createElement
// append
// prepend
// remove
// before
// after



// document.createElement-

// Creating a new 'li' element for the new todo item
const newTodoItem = document.createElement("li");
// Creating a text node with the content "Teach students"
const newTodoItemText = document.createTextNode("Teach students");


// append - 

// Appending the text node to the newly created 'li' element
newTodoItem.append(newTodoItemText);
// Logging the 'newTodoItem' element to the console
console.log(newTodoItem);
// Output: 
// <li>Teach students</li>
// This shows the new 'li' element with the text content inside it.
// Selecting the 'ul' element with the class 'todo-list'
const todoList = document.querySelector(".todo-list");
// Appending the new 'li' element ('newTodoItem') to the 'todo-list'
todoList.append(newTodoItem);
// This adds the new list item "<li>Teach students</li>" at the end of the existing 'ul'.
// The final HTML structure of the todo-list will be:
// <ul class="todo-list">
//   <li>
//     <span class="text">Do this do that</span>
//     <div class="todo-buttons">
//       <button class="todo-btn done">Done</button>
//       <button class="todo-btn remove">Remove</button>
//     </div>
//   </li>
//   <li>Teach students</li> <!-- This is the new item added -->
// </ul>


// prepend -

// Creating a new 'li' element for the new todo item
const newTodoItemPrepend = document.createElement("li");
// Creating a text node with the content "Learn JavaScript"
const newTodoItemPrependText = document.createTextNode("Learn JavaScript");
// Appending the text node to the newly created 'li' element
newTodoItemPrepend.append(newTodoItemPrependText);
// Selecting the 'ul' element with the class 'todo-list'
const todoListPrepend = document.querySelector(".todo-list");
// Using prepend() to add the new 'li' at the beginning of the todo list
todoListPrepend.prepend(newTodoItemPrepend);
// This will add the new list item "<li>Learn JavaScript</li>" at the start of the list.
// The final HTML structure of the todo-list will be:
// <ul class="todo-list">
//   <li>Learn JavaScript</li>  <!-- This is the new item added to the beginning -->
//   <li>
//     <span class="text">Do this do that</span>
//     <div class="todo-buttons">
//       <button class="todo-btn done">Done</button>
//       <button class="todo-btn remove">Remove</button>
//     </div>
//   </li>
// </ul>


// remove -

// Selecting the first 'li' element from the todo list
const firstTodoItem = document.querySelector(".todo-list li");
// Removing the selected 'li' element from the list
firstTodoItem.remove();
// This will remove the first item from the todo list, which in this case would be:
// <li>Learn JavaScript</li> (if we just added it using prepend)
// After removal, the todo list would look like this:
// <ul class="todo-list">
//   <li>
//     <span class="text">Do this do that</span>
//     <div class="todo-buttons">
//       <button class="todo-btn done">Done</button>
//       <button class="todo-btn remove">Remove</button>
//     </div>
//   </li>
// </ul>



// before - before inserts a new element just before the selected element.

// Create a new 'li' element for the new todo item
const newTodoItemBefore = document.createElement("li");
// Create a text node with the content "Buy Groceries"
const newTodoItemBeforeText = document.createTextNode("Buy Groceries");
// Append the text node to the newly created 'li' element
newTodoItemBefore.append(newTodoItemBeforeText);
// Select the existing todo list item that we want to insert the new item before
const existingTodoItem = document.querySelector(".todo-list li");
// Insert the new todo item before the existing todo item
existingTodoItem.before(newTodoItemBefore);
// This will insert "<li>Buy Groceries</li>" right before the selected 'li' element.
// The final HTML structure of the todo-list will be:
// <ul class="todo-list">
//   <li>Buy Groceries</li>  <!-- New item inserted before the first existing item -->
//   <li>
//     <span class="text">Do this do that</span>
//     <div class="todo-buttons">
//       <button class="todo-btn done">Done</button>
//       <button class="todo-btn remove">Remove</button>
//     </div>
//   </li>
// </ul>




// after -after inserts a new element just after the selected element.

// Create a new 'li' element for the new todo item
const newTodoItemAfter = document.createElement("li");
// Create a text node with the content "Attend meeting"
const newTodoItemAfterText = document.createTextNode("Attend meeting");
// Append the text node to the newly created 'li' element
newTodoItemAfter.append(newTodoItemAfterText);
// Select the existing todo list item that we want to insert the new item after
const existingTodoItemAfter = document.querySelector(".todo-list li");
// Insert the new todo item after the selected existing todo item
existingTodoItemAfter.after(newTodoItemAfter);
// This will insert "<li>Attend meeting</li>" right after the selected 'li' element.
// The final HTML structure of the todo-list will be:
// <ul class="todo-list">
//   <li>
//     <span class="text">Do this do that</span>
//     <div class="todo-buttons">
//       <button class="todo-btn done">Done</button>
//       <button class="todo-btn remove">Remove</button>
//     </div>
//   </li>
//   <li>Attend meeting</li>  <!-- New item inserted after the first existing item -->
// </ul>


// Difference between append,prepend,before & after - 

// 1. append():

// Function: Adds a new element inside the selected element, at the end.
// Position: The new content is added as the last child of the element.
// Usage: You use it when you want to add something inside an element but after all other content that already exists.
const parent = document.querySelector('.todo-list');
const newItem = document.createElement('li');
newItem.textContent = 'New Task';
parent.append(newItem); // Adds the new item as the last child of the .todo-list

// Result:

// html
// Copy code
// <ul class="todo-list">
//   <li>Old Task 1</li>
//   <li>Old Task 2</li>
//   <li>New Task</li> <!-- Added at the end -->
// </ul>


// 2. prepend():

// Function: Adds a new element inside the selected element, at the beginning.
// Position: The new content is added as the first child of the element.
// Usage: You use it when you want to add something inside an element but before any other content.

const parent = document.querySelector('.todo-list');
const newItem = document.createElement('li');
newItem.textContent = 'Urgent Task';
parent.prepend(newItem); // Adds the new item as the first child of the .todo-list

// Result:
// <ul class="todo-list">
//   <li>Urgent Task</li> <!-- Added at the beginning -->
//   <li>Old Task 1</li>
//   <li>Old Task 2</li>
// </ul>

// 3. before():

// Function: Inserts a new element outside the selected element, before it.
// Position: The new element is added right before the selected element, but outside it.
// Usage: Use it when you want to place something before the selected element but not inside of it.

const existingItem = document.querySelector('.todo-list li');
const newItem = document.createElement('li');
newItem.textContent = 'Reminder Task';
existingItem.before(newItem); // Adds the new item right before the first <li>

// Result:
// <ul class="todo-list">
//   <li>Reminder Task</li> <!-- Added before the first existing task -->
//   <li>Old Task 1</li>
//   <li>Old Task 2</li>
// </ul>

// 4. after():

// Function: Inserts a new element outside the selected element, after it.
// Position: The new element is added right after the selected element, but outside it.
// Usage: Use it when you want to place something after the selected element but not inside of it.

const existingItem = document.querySelector('.todo-list li');
const newItem = document.createElement('li');
newItem.textContent = 'Follow-up Task';
existingItem.after(newItem); // Adds the new item right after the first <li>

// Result:
{/* <ul class="todo-list">
    <li>Old Task 1</li>
    <li>Follow-up Task</li> <!-- Added after the first existing task -->
    <li>Old Task 2</li>
</ul> */}

// Summary of Differences:

// Method	Adds inside or outside?	Adds at the beginning or end?
// append()	Inside	End (last child)
// prepend()	Inside	Beginning (first child)
// before()	Outside	Before the selected element
// after()	Outside	After the selected element
// Use append() and prepend() to add content inside an element.
// Use before() and after() to add content outside the selected element, just before or after it.