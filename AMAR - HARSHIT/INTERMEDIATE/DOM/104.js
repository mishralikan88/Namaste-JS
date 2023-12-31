// select element using query selector.
// We can use query selector to select either a class or id element.

// const mainHeading = document.getElementById("main-heading");
const mainHeading = document.querySelector("#main-heading");
const header = document.qu8erySelector(".header");  // returns the header element
const navItem = document.querySelectorAll(".nav-item")   // returns all navItems element inside a node list.
console.log(navItem);