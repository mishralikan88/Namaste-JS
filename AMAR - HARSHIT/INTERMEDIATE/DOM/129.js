// This JavaScript file interacts with index.html document.

// Selecting the form where new todos will be added.
const todoForm = document.querySelector(".form-todo");

// Selecting the input field where users type new todos.
const todoInput = document.querySelector(".form-todo input[type='text']");

// Selecting the unordered list (ul) that will hold all todo list items.
const todoList = document.querySelector(".todo-list");

// Adding an event listener to the form that listens for the submit event (when the user adds a new todo).
todoForm.addEventListener("submit", (e) => {
  // Preventing the default behavior of form submission (which would reload the page).
  e.preventDefault();

  // Grabbing the value (text) from the input field (what the user types).
  const newTodoText = todoInput.value;

  // Creating a new <li> element that will represent a todo item.
  const newLi = document.createElement("li");

  // Creating the inner HTML for the new list item, which includes the task text
  // and two buttons (Done and Remove) for each task.
  const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;

  // Inserting the inner HTML (task text + buttons) into the newly created <li> element.
  newLi.innerHTML = newLiInnerHtml;

  // Adding the new <li> element (the new todo item) to the todo list (<ul> element).
  todoList.append(newLi);

  // Clearing the input field so the user can type a new todo after submission.
  todoInput.value = "";
});

// Adding an event listener to the todo list (<ul>) to detect clicks on the Done or Remove buttons.
// This uses event delegation, as the listener is on the parent <ul> and not the individual buttons.
todoList.addEventListener("click", (e) => {
  // Checking if the clicked element has the "remove" class, which means the user clicked the Remove button.
  if (e.target.classList.contains("remove")) {
    // Finding the <li> element that contains the todo item we want to remove.
    // The structure is: <li> -> <div> -> <button>, so we navigate up to the parent <li>.
    const targetedLi = e.target.parentNode.parentNode;

    // Removing the <li> element (i.e., the todo item) from the list.
    targetedLi.remove();
  }

  // Checking if the clicked element has the "done" class, which means the user clicked the Done button.
  if (e.target.classList.contains("done")) {
    // Finding the <span> element that contains the task text.
    // The structure is: <li> -> <span> -> <div> -> <button>, so we access the sibling <span>.
    const liSpan = e.target.parentNode.previousElementSibling;

    // Adding a line-through (strikethrough) style to the task text to indicate that it is done.
    liSpan.style.textDecoration = "line-through";
  }
});