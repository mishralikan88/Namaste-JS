// Introduction to variables

"use strict"; // Enforces Strictness . 'var' is mandatory while creating variables. Without this check we can create variables without using var.

// variables can store some information.
// we can use that information later.
// we can change that information later.

// Declare a variable . variable declaration. syntax - <var/let/const> <varName> = <variable value>

var firstName = "Harshit";

// use a variable 
console.log(firstName);

// change value 

firstName = "Mohit"; // Same variable is modified

var firstName = "Lycan";  // Creates a new variable firstName. Since we have two variable declaration with the same name , old variable is garbage collected when the debugger hits this line.

console.log(firstName);