// Select the element with the class "section-todo"
const sectionTodo = document.querySelector(".section-todo");

// Get the dimensions and position of the selected element
const info = sectionTodo.getBoundingClientRect();

// Log the information to the console
console.log(info);

// The 'info' object contains properties for the dimensions and position:
// - info.width: The width of the element
// - info.height: The height of the element
// - info.top: The distance from the top of the viewport to the element
// - info.right: The distance from the left of the viewport to the right edge of the element
// - info.bottom: The distance from the top of the viewport to the bottom edge of the element
// - info.left: The distance from the left of the viewport to the left edge of the element