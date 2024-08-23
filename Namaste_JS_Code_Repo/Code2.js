getName()
console.log(x)
console.log(getName)
var x = 20
function getName() {
    console.log("Namaste Javascript")
}

// console.log(x)
// console.log(getName)
// // getName() // Error because arrow function & function expression cannot be hoisted.
// var x = 20
// var getName = () => {  
//     console.log("Namaste Javascript")
// }


// Hoisting - 

// Hoisting is a JavaScript mechanism that allows variables and functions to be accessed before they are explicitly declared in the code. This behavior is due to the memory creation phase of the execution context, during which:

// Function Declarations: Are fully hoisted, meaning both the function name and its body are moved to the top of their containing scope. This allows functions to be called before their declaration appears in the code.

// var Declarations: Are hoisted with their declarations but not their initializations. Variables declared with var are set to undefined until the code execution reaches the assignment.

// let and const Declarations: Are hoisted as well, but are not initialized. They are placed in a Temporal Dead Zone (TDZ) where accessing them before their actual declaration results in a ReferenceError.

// In summary, hoisting allows variables and functions to be used before their declaration due to the way JavaScript handles the setup of the execution context during the memory creation phase.