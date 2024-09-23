// this keyword

const btn = document.querySelector(".btn-headline");

// Adding a click event listener using a Regular function.
btn.addEventListener("click", function () {
    console.log("you clicked me !!!!"); // Logs message when button is clicked
    console.log("value of this");
    console.log(this);  // In a regular function, 'this' refers to the current element (the button) that triggered the event
    // 'this' will output: <button class="btn btn-headline">Learn More</button>
});


// Adding a click event listener using an arrow function.
btn.addEventListener("click", () => {
    console.log("you clicked me !!!!"); // Logs message when button is clicked
    console.log("value of this");
    console.log(this);  // In an arrow function, 'this' refers to the surrounding context (which is the window in this case)
    // 'this' will output: Window object (global scope)
});