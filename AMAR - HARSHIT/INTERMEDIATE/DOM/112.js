// index.html

// Selecting the section with the class 'section-todo'
const sectionTodo = document.querySelector(".section-todo"); 

// Logging the classList of the selected section element
console.log(sectionTodo.classList); 
// Output: DOMTokenList ["section-todo", "container"] (assuming these are the initial classes)

// Adding a new class 'bg-dark' to the section element
sectionTodo.classList.add('bg-dark'); 
// After this line, the section element will now have classes: "section-todo container bg-dark"

// Removing the 'container' class from the section element
sectionTodo.classList.remove("container"); 
// After this line, the section element will now have classes: "section-todo bg-dark"

// Checking if the section element contains the 'container' class
const ans = sectionTodo.classList.contains("container"); 
console.log(ans); 
// Output: false (since 'container' was removed earlier)

// Toggling the 'bg-dark' class on the section element
// If the 'bg-dark' class exists, it will be removed, otherwise it will be added.
sectionTodo.classList.toggle("bg-dark"); 
// If 'bg-dark' is already present, it will be removed, otherwise, it will be added.
// In this case, since 'bg-dark' was added earlier, it will now be removed.

// Selecting the header element with the class 'header'
const header = document.querySelector(".header"); 

// Adding a 'bg-dark' class to the header element
// header.classList.add("bg-dark"); 
// Uncommenting this line will add the 'bg-dark' class to the header element

// Logging the classList of the header element
console.log(header.classList); 
// Output: DOMTokenList ["header"] (initially it only contains the 'header' class)