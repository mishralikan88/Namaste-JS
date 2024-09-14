
// case 1 - without 'use strict'

// global scope

// console.log(window); // window 
// console.log(this);  // window 

// local scope / function scope

// function myFunc(){
//     "use strict"; // Enforces strict mode for this function
//     console.log(this); // this => undeined
// }
// myFunc();

// function myFunc1(){
//     console.log(this); // this => window
// }
// myFunc1();

// myFunc will be added inside window object.



// case 2 - with 'use strict' in the entire file

'use strict'

// global scope

console.log(window); // window 
console.log(this);  // window 

// local scope / function scope

function myFunc(){
    console.log(this); // this => undeined
}
myFunc();

function myFunc1(){
    console.log(this); // this => undefined
}
myFunc1();


