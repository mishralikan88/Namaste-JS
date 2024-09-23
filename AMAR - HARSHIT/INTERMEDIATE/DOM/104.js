// select element using query selector.

// We can use query selector to select either a class or id element.

const mainHeading = document.querySelector("#main-heading"); // main-heading is id(#)
const header = document.querySelector(".header");  // returns the header element , header is class(.)
const navItem = document.querySelectorAll(".nav-item")   // returns all navItems element inside a node list.
console.log(navItem); // NodeList(3) [li.nav-item, li.nav-item, li.nav-item]


// An ID should be unique. // Class names can be duplicated.