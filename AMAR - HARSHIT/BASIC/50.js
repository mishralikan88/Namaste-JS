// Block scope vs function scope  = Refer Akshaya saini Videos


// let and const are block scope
// var is function scope 


// Block scope with var 

// if(true){
//     var firstName = "harshit";
//     console.log(firstName);
// }
// console.log(firstName);


// if (true) {
//     var firstName = "harshit";
//     console.log(firstName);
// }
// var firstName = "harshit";
// firstName = "Likan" // Same var firstName is altered.
// console.log(firstName);


// if (true) {
//     let firstName = "harshit";
//     // The "let" variable is limited to the current block, meaning it cannot be accessed outside of that block. 
//     // This is why "let" is considered block-scoped.
//     // The same applies to "const" variables as well.
//     console.log(firstName);
// }

// console.log(firstName);  // error - firstName is not defined

function myApp() {
    if (true) {
        var firstName = "harshit";
        console.log(firstName);
    }

    if (true) {
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();



function myAppLet() {
    if (true) {
        let firstName = "harshit";
        console.log(firstName);
    }

    if (true) {
        console.log(firstName); // error upfront . The control flow stops here & it doesnot go to the next line.  
    }
    console.log(firstName);
}

myAppLet();


// Block scope vs function scope

// 1. Block Scope -

// Variables declared with let and const are block-scoped.
// A block is defined by curly braces { }, such as in loops, conditionals, or function bodies.
// Variables declared with let and const are only accessible within the block they are defined in, and not outside of it.
// Example:

if (true) {
    let a = 10;
    const b = 20;
    console.log(a);  // Output: 10
    console.log(b);  // Output: 20
}
console.log(a);  // Error: a is not defined
console.log(b);  // Error: b is not defined

// Here, a and b are block-scoped, meaning they exist only within the if block and cannot be accessed outside of it.


// 2. Function Scope -

// Variables declared with var are function-scoped.
// They are available throughout the entire function in which they are defined, regardless of block boundaries (such as loops or conditionals) within the function.
// Function-scoped variables are not confined to blocks like let or const and can sometimes lead to unintended behavior.
// Example:

function myFunction() {
    if (true) {
        var x = 30;
    }
    console.log(x);  // Output: 30 (accessible even outside the block)
}
myFunction();

console.log(x);  // Error: x is not defined (outside the function scope)

// In this case, x is function-scoped because it was declared with var. 
// It's accessible anywhere inside the myFunction, including outside of the if block.

// Block scope -

// Limited to the block { } where it's declared.
// Each iteration of a loop gets its own separate block scope.
// let and const are hoisted but cannot be used before declaration.
// Variables exist in the TDZ until they are initialized.

// Function scope -

// Limited to the function where it's declared.
// Loop variables share the same function scope.
// var is hoisted and can be used before declaration (with undefined).
// No TDZ. Variables are undefined until initialized.