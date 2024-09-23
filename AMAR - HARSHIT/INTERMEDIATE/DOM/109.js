// HtmlCollection: 
// HTMLCollection is live, meaning it automatically updates when the DOM changes.
// Get all <a> elements from the document and store them in navItems (an HTMLCollection)
let navItems = document.getElementsByTagName("a"); // HTMLCollection
console.log(navItems); // Logs the HTMLCollection of all <a> elements

// We cannot use the forEach() method directly on an HTMLCollection.
// We can, however, iterate over the HTMLCollection using for loop or for..of loop.

// Using for loop to iterate through the HTMLCollection and style each item
for (let i = 0; i < navItems.length; i++) {
    const navItem = navItems[i]; // Access each <a> element
    navItem.style.backgroundColor = "#fff"; // Set background color to white
    navItem.style.color = "green"; // Set text color to green
    navItem.style.fontWeight = "bold"; // Set font weight to bold
}

// Using for..of loop to iterate through HTMLCollection and style each item
for (let navItem of navItems) {
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}

// Since forEach() doesn't work on HTMLCollection, we need to convert it into an array.
// Converting HTMLCollection into an array using Array.from()
navItems = Array.from(navItems); // Now navItems is an array
console.log(Array.isArray(navItems)); // true (Verifies the conversion)

// Now we can use forEach() on the array to style each item
navItems.forEach((navItem) => {
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
});

// NodeList:
// NodeList is static and does not update automatically when DOM changes.
// Query all elements with class "nav-item" and store them in navItems (a NodeList)
const navItemsList = document.querySelectorAll(".nav-item"); // NodeList
console.log(navItemsList[1]); // Access the second <li> with class "nav-item"

navItems = document.querySelectorAll("a"); // Returns a NodeList of <a> elements
console.log(Array.isArray(navItems)); // false (It's a NodeList, not an array)

// Using for loop to iterate through NodeList
for (let i = 0; i < navItems.length; i++) {
    const navItem = navItems[i];
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}

// Using for..of loop to iterate through NodeList
for (let navItem of navItems) {
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}

// NodeList supports forEach(), so we can directly use it here to style each item
navItems.forEach((navItem) => {
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
});
console.log(navItems); // Logs the NodeList

// Converting NodeList into an array for more array-like methods
navItems = Array.from(navItems); // NodeList => Array
console.log(Array.isArray(navItems)); // true (Now it's an array)