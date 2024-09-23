// get multiple elements using getElementsByClassName
// Using getElementsByClassName returns an HTMLCollection (array-like object, not an array)
const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection
console.log(navItems);
console.log(Array.isArray(navItems)); // false - it's an array-like object (can use indexing, length, looping)

// get multiple elements items using querySelectorAll
// Using querySelectorAll returns a NodeList (also an array-like object)
const navItemsList = document.querySelectorAll(".nav-item"); // NodeList - it's an array-like object (can use indexing, length, looping)
console.log(navItemsList[1]); // Access second element via indexing


// Comparison: (Discussed in later chapters)

// HTMLCollection: Live, auto-updates, array-like (no forEach), used with getElementsByClassName
// NodeList: Static, doesn't auto-update, array-like (supports forEach), used with querySelectorAll