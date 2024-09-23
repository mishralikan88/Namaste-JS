// elem.insertAdjacentHTML(where, html)
// beforebegin == before 
// afterbegin == prepend 
// beforeend == append 
// afterend == after 

// Syntax - element.insertAdjacentHTML(where, html);
// where: Specifies the position relative to the element.
// html: A string representing the HTML to insert.


// 1. beforebegin -

// Inserts the HTML outside the element, just before it.
// Position: Before the element, not inside it.
const todoList = document.querySelector('.todo-list');
// Inserts the HTML before the <ul class="todo-list"> element itself
todoList.insertAdjacentHTML('beforebegin', '<p>Task List</p>');

// Output:
// <p>Task List</p>  <!-- New HTML inserted before the <ul> -->
// <ul class="todo-list">
//   <li>Old Task 1</li>
//   <li>Old Task 2</li>
// </ul>


// 2. afterbegin:

// Inserts the HTML inside the element, at the beginning.
// Position: As the first child of the element.

// const todoList = document.querySelector('.todo-list');
// Inserts the HTML at the beginning of <ul class="todo-list"> (as the first child)
todoList.insertAdjacentHTML('afterbegin', '<li>First Task</li>');

// Output:
// <ul class="todo-list">
//   <li>First Task</li>  <!-- New HTML inserted at the beginning -->
//   <li>Old Task 1</li>
//   <li>Old Task 2</li>
// </ul>


// 3. beforeend:

// Inserts the HTML inside the element, at the end.
// Position: As the last child of the element.

// const todoList = document.querySelector('.todo-list');
// Inserts the HTML at the end of <ul class="todo-list"> (as the last child)
todoList.insertAdjacentHTML('beforeend', '<li>Last Task</li>');

// Output:
// <ul class="todo-list">
//   <li>Old Task 1</li>
//   <li>Old Task 2</li>
//   <li>Last Task</li>  <!-- New HTML inserted at the end -->
// </ul>


// 4. afterend:
// Inserts the HTML outside the element, just after it.
// Position: After the element, not inside it.

// const todoList = document.querySelector('.todo-list');
// Inserts the HTML after the <ul class="todo-list"> element itself
todoList.insertAdjacentHTML('afterend', '<p>End of Task List</p>');

// Output:
// <ul class="todo-list">
//   <li>Old Task 1</li>
//   <li>Old Task 2</li>
// </ul>
// <p>End of Task List</p>  <!-- New HTML inserted after the <ul> -->



// ========== Summary ===========

// beforebegin: Inserts before the element (outside).
// afterbegin: Inserts inside the element, at the beginning.
// beforeend: Inserts inside the element, at the end.
// afterend: Inserts after the element (outside).